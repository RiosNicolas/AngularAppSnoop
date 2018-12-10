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

        //Detalle
        public JsonResult Details(int id)
        {
            var cliente = dbContext.Clientes.Find(id);
            return Json(cliente, JsonRequestBehavior.AllowGet);
        }

        //Crear
        [HttpPost]
        public JsonResult Create(Cliente cliente)
        {
            dbContext.Clientes.Add(cliente);
            dbContext.SaveChanges();
            return Json(null);
        }

        //Editar
        [HttpPost]
        public JsonResult Edit(Cliente cliente)
        {
            dbContext.Entry(cliente).State = System.Data.Entity.EntityState.Modified;
            dbContext.SaveChanges();
            return Json(null);
        }

        //Borrar
        [HttpPost]
        public JsonResult Delete(int id)
        {
            var cliente = dbContext.Clientes.Find(id);
            dbContext.Clientes.Remove(cliente);
            dbContext.SaveChanges();

            return Json(null);
        }
    }
}