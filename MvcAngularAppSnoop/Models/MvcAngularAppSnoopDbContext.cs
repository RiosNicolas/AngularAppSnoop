using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace MvcAngularAppSnoop.Models
{
    public class MvcAngularAppSnoopDbContext : DbContext
    {
        public MvcAngularAppSnoopDbContext() : base("name = MvcAngularAppSnoopDbContext")
        {

        }

        // convención de ajuste
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Cliente> Clientes { get; set; }
    }
}