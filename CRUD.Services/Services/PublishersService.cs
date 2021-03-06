using CRUD.DataAccess.Repositories;
using CRUD.Domain;
using CRUD.Views;
using CRUD.Views.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CRUD.Services
{
    public class PublishersService
    {
        private BookRepository _bookRepository;
        private JournalRepository _journalRepository;
        private PublisherRepository _publisherRepository;

        public PublishersService(string connectionString)
        {
            _bookRepository = new BookRepository(connectionString);
            _journalRepository = new JournalRepository(connectionString);
            _publisherRepository = new PublisherRepository(connectionString);
        }

        public List<PublisherViewModel> GetAll()
        {
            var publisherList = _publisherRepository.GetAll();
            var publisherViewModelList = new List<PublisherViewModel>();

            foreach (var publisher in publisherList)
            {
                var books = BooksToBookViewModels(publisher.Books);
                var journals = JournalsToJournalViewModels(publisher.Journals);

                var publisherViewModel = new PublisherViewModel();

                publisherViewModel.Id = publisher.Id.ToString();
                publisherViewModel.Name = publisher.Name;
                if (books != null)
                {
                    publisherViewModel.Books = books;
                    publisherViewModel.BookIds = GetBookIds(publisher.Books);
                }

                if (journals != null)
                {
                    publisherViewModel.Journals = journals;
                    publisherViewModel.JournalIds = GetJournalIds(publisher.Journals);
                }
                
                publisherViewModelList.Add(publisherViewModel);
            }
            return publisherViewModelList;
        }

        public PublisherViewModel Create(PostPublisherViewModel postPublisherViewModel)
        {
            var publisher = ViewModelToDomain(postPublisherViewModel);
            _publisherRepository.Create(publisher, postPublisherViewModel.JournalIds, postPublisherViewModel.BookIds);

            var publisherViewModel = DomainToViewModel(postPublisherViewModel, publisher.Id);
            return publisherViewModel;
        }

        public PublisherViewModel Update(PostPublisherViewModel postPublisherViewModel)
        {
            var publisher = ViewModelToDomain(postPublisherViewModel);
            publisher.Id = Guid.Parse(postPublisherViewModel.Id);
            _publisherRepository.Update(publisher, postPublisherViewModel.JournalIds, postPublisherViewModel.BookIds);
            publisher.Id = Guid.Parse(postPublisherViewModel.Id);

            var publisherViewModel = DomainToViewModel(postPublisherViewModel, publisher.Id);
            return publisherViewModel;
        }

        public void Delete(PublisherViewModel publisherViewModel)
        {
            var id = Guid.Parse(publisherViewModel.Id);
            _publisherRepository.Delete(id);
        }

        private Publisher ViewModelToDomain(PostPublisherViewModel postPublisherViewModel)
        {
            var publisher = new Publisher
            {
                Name = postPublisherViewModel.Name,
            };
            return publisher;
        }

        private PublisherViewModel DomainToViewModel(PostPublisherViewModel postPublisherViewModel, Guid publisherId)
        {
            var publisherViewModel = new PublisherViewModel
            {
                Id = postPublisherViewModel.Id,
                Name = postPublisherViewModel.Name,
            };
            return publisherViewModel;
        }

        private HashSet<string> GetBookIds(HashSet<Book> books)
        {
            var bookIds = new HashSet<string>();

            foreach (var book in books)
            {
                if (book != null)
                {
                    bookIds.Add(book.Id.ToString());
                }
            }
            return bookIds;
        }

        private HashSet<string> GetJournalIds(HashSet<Journal> journals)
        {
            var journalIds = new HashSet<string>();

            foreach (var journal in journals)
            {
                if (journal != null)
                {
                    journalIds.Add(journal.Id.ToString());
                }
            }
            return journalIds;
        }

        private List<BookViewModel> BooksToBookViewModels(HashSet<Book> books)
        {
            var bookViewModels = new List<BookViewModel>();

            foreach (var book in books)
            {
                if (book != null)
                {
                    var bookViewModel = new BookViewModel();
                    bookViewModel.Id = book.Id.ToString();
                    bookViewModel.Name = book.Name;
                    bookViewModel.Year = book.Year;

                    bookViewModels.Add(bookViewModel);
                }
            }
            var result = bookViewModels.GroupBy(x => x.Id)
                                  .Select(g => g.First())
                                  .ToList();
            return result;
        }

        private List<JournalViewModel> JournalsToJournalViewModels(HashSet<Journal> journals)
        {
            var journalViewModels = new List<JournalViewModel>();

            foreach (var journal in journals)
            {
                if (journal != null)
                {
                    var journalViewModel = new JournalViewModel();
                    journalViewModel.Id = journal.Id.ToString();
                    journalViewModel.Name = journal.Name;
                    journalViewModel.Date = journal.Date;

                    journalViewModels.Add(journalViewModel);
                }
            }

            var result = journalViewModels.GroupBy(x => x.Id)
                                  .Select(g => g.First())
                                  .ToList();
            return result;
        }
    }
}

