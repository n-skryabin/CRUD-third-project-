﻿using CRUD.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.DataAccess.ReponseModels
{
    public class BookResponseModel : BaseResponseModel
    {
        public string Name { get; set; }
        public string Year { get; set; }
        public List<Author> Authors { get; set; }
    }
}
