﻿using CRUD.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using CRUD.Views;
using Dapper.Contrib.Extensions;

namespace CRUD.DataAccess.Repositories
{
    public class BookRepository
    {
        private IDbConnection _db;

        public BookRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<BookViewModel> Read()
        {
            string query = @"SELECT Authors.*, Books.*
                             FROM Authors 
                             INNER JOIN BooksAuthors on BooksAuthors.AuthorId = Authors.Id
                             INNER JOIN Books on BooksAuthors.BookId = Books.Id";
            var booksDictionary = new Dictionary<string, BookViewModel>();

            _db.Query<Author, Book, BookViewModel>(query, (author, book) =>
            {
                BookViewModel bookViewModel = new BookViewModel();
                if (!booksDictionary.TryGetValue(book.Id.ToString(), out bookViewModel))
                {
                    bookViewModel = new BookViewModel
                    {
                        Id = book.Id.ToString(),
                        Name = book.Name,
                        Year = book.Year
                    };
                    booksDictionary.Add(book.Id.ToString(), bookViewModel);
                }

                if (bookViewModel.AuthorsList == null)
                    bookViewModel.AuthorsList = new List<Author>();

                if (bookViewModel.AuthorIds == null)
                    bookViewModel.AuthorIds = new List<string>();

                bookViewModel.AuthorsList.Add(author);
                bookViewModel.AuthorIds.Add(author.Id.ToString());

                return bookViewModel;
            }).AsQueryable();

            var bookViewModelList = booksDictionary.Values.ToList();
            return bookViewModelList;
        }

        public void Create(Book book, List<string> authorsListIds)
        {
            AddBookInBooksAuthors(book, authorsListIds);

            string query = "INSERT INTO Books (Id, Name, Year, DateTime) VALUES (@Id, @Name, @Year, @DateTime)";
            _db.Query(query, book);
        }

        public void Update(Book newRecord, List<string> authorsListIds)
        {
            DeleteBook(newRecord.Id);

            AddBookInBooksAuthors(newRecord, authorsListIds);

            string query = "UPDATE Books SET Name = @Name, Year = @Year, DateTime = @DateTime WHERE Id = @Id";
            newRecord.DateTime = DateTime.UtcNow;
            _db.Execute(query, newRecord);
        }

        public void Delete(Guid bookId)
        {
            DeleteBook(bookId);

            Book book = new Book
            {
                Id = bookId
            };
            _db.Delete(book);
        }

        public void DeleteBook(Guid bookId)
        {
            var stringBookId = bookId.ToString();

            string query = "DELETE FROM BooksAuthors WHERE BookId = @stringBookId";
            _db.Query(query, new { stringBookId });
        }

        public List<Book> GetBooks(List<Guid> booksListIds)
        {
            var arrayIds = booksListIds.ToArray();

            string query = "SELECT * FROM Books WHERE Id IN @arrayIds";
            var booksList = _db.Query<Book>(query, arrayIds).ToList();
            return booksList;
        }

        public List<Book> GetBooks(Guid publisherId)
        {
            string query = "SELECT * FROM Books WHERE PublisherId = @publisherId";
            var booksList = _db.Query<Book>(query, new { publisherId }).ToList();
            return booksList;
        }

        public void AddBookInBooksAuthors(Book book, List<string> authorsListId)
        {
            foreach (var authorID in authorsListId)
            {
                var bookAuthor = new BooksAuthors
                {
                    Id = Guid.NewGuid(),
                    BookId = book.Id,
                    AuthorId = Guid.Parse(authorID),
                };

                string query = "INSERT INTO BooksAuthors (Id, BookId, AuthorId) VALUES (@Id, @BookId, @AuthorId)";
                _db.Query(query, bookAuthor);
            }
        }
    }
}
