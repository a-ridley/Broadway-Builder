﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace DataAccessLayer
{
    public class BroadwayBuilderContext : DbContext
    {
        public BroadwayBuilderContext(): base("name=BroadwayBuilder")
        {

        }

        //Creating property on db context
        //Allows to access table in db
        public DbSet<User> Users { get; set; }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<Role> Roles { get; set; }
    }
}
