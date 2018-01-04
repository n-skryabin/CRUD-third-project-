﻿using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;
using CRUD.Web.Core.Controllers;
using System;

namespace CRUD.Web.Controllers
{
    public class JournalsController : BaseController
    {
        private JournalsService _journalsService;

        public JournalsController(IConfiguration configuration) : base(configuration)
        {
            _journalsService = new JournalsService(ConnectionString);
        }

        [HttpGet]
        public IActionResult Read()
        {
            try { 
            var journals = _journalsService.Read();
            if (journals == null)
            {
                return null;
            }
            return Ok(journals);
            }
            catch(Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody]PostJournalViewModel postJournalViewModel)
        {
            try
            {
                _journalsService.Create(postJournalViewModel);
                return Ok(postJournalViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Update([FromBody]PostJournalViewModel postJournalViewModel)
        {
            try
            {
                _journalsService.Update(postJournalViewModel);
                return Ok(postJournalViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Delete([FromBody]JournalViewModel journalViewModel)
        {
            try
            {
                _journalsService.Delete(journalViewModel);
                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult ReadJournalsForMultiselect([FromBody]JournalViewModel journalViewModel)
        {
            try
            {
                return Ok(_journalsService.Read());
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
