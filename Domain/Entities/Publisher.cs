﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Domain
{
    public class Publisher : BaseEntity
    {
        public string Name { get; set; }
        public List<Book> Books { get; set; }
        public List<Journal> Journals { get; set; }
    }
}
