using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using myWebAPI.Entities;

namespace myWebAPI.Data
{
    public class DataContext :DbContext
    {
        public DataContext(DbContextOptions options):base(options){

        }
        public DbSet<AppUser> Users { get; set; }
    }
}