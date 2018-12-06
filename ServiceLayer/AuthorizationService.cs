﻿using DataAccessLayer;
using DataAccessLayer.Enums;
using ServiceLayer.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ServiceLayer
{
    public class AuthorizationService : IAuthorizationService
    {
        //DbContext would be declared
        List<Permission> permissions;//This stays
        private readonly PermissionRepository permissionRepository;
        public AuthorizationService(BroadwayBuilderContext Dbcontext, User user)//Would pass in DbContext instead of List if we were to use DB
        {
            //Initialize the DbContext
            this.permissionRepository = new PermissionRepository(Dbcontext);
            //permissions = authorizedPermissions;//call the DbContext to get the permissions and store them into the List
        }

        /// <summary>
        /// getter for List of Permissions
        /// </summary>
        public List<Permission> Permissions
        {
            get
            {
                return permissions;
            }
        }

        /// <summary>
        /// Checks if a user is authorized to perform a action
        /// </summary>
        /// <param name="user">User that must be checked if they are authorized</param>
        /// <param name="CheckIfAuthorized">check if user has this permission</param>
        /// <returns>true if user has permission, false otherwise</returns>
        public bool HasPermission(Permission CheckIfAuthorized)
        {
            if (permissions.Contains(CheckIfAuthorized))
            {
                return true;
            }
            return false;
        }


    }
}
