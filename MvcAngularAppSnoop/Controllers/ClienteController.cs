using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcAngularAppSnoop.Models;

namespace MvcAngularAppSnoop.Controllers
{
    public class ClienteController : Controller
    {
        private MvcAngularAppSnoopDbContext dbContext = null;
        public ClienteController()
        {
            dbContext = new MvcAngularAppSnoopDbContext();
        }

        public JsonResult Index()
        {
            var clientes = dbContext.Clientes.ToList();
            return Json(clientes, JsonRequestBehavior.AllowGet);
        }
    }
}