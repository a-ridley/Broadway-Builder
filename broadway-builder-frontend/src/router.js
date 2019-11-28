import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/theaters",
      name: "theaters",
      component: () => import("./views/ViewAllTheaters.vue")
    },
    {
      path: "/theater/:TheaterID",
      name: "theater",
      props: true,
      component: () => import("./views/TheaterProfile.vue")
    },
    {
      path: "/adminaccount/{userID}",
      name: "adminaccount",
      component: () => import("./views/AdminAccount.vue")
    },
    {
      path: "/sysadminaccount/{userID}",
      name: "sysadminaccount",
      component: () => import("./views/SysAdminAccount.vue")
    },
    {
      path: "/theater/:TheaterID/helpwanted",
      name: "helpwanted",
      props: true,
      component: () => import("./views/HelpWanted/HelpWanted.vue")
    },
    {
      path: "/theater/:TheaterID/userproductioninfo",
      name: "userproductioninfo",
      props: true,
      component: () => import("./views/ProductionInfo/UserProductionInfo.vue")
    },
    {
      path: "/theater/{theaterid}/adminproductioninfo",
      name: "adminproductioninfo",
      component: () => import("./views/ProductionInfo/AdminProductionInfo.vue")
    },
    {
      path: "/theater/{theaterid}/adminproductioninfo/{productionid}",
      name: "adminpicturewheel",
      component: () => import("./views/ProductionInfo/AdminProductionInfo.vue")
    },
    {
      path: "/sysadminaccount/{userID}/SysAdminViewAllTheaters",
      name: "SysAdminViewAllTheaters",
      component: () => import("./views/SysAdminViewAllTheaters.vue")
    },
    {
      path:"/registration",
      name:'registration',
      component: () => import("./views/Registration.vue")
    },
    {
      path:"/login",
      name:'login',
      component: () => import("./views/Login.vue")
    },
    {
      path:"/logout",
      name:'logout',
      component: () => import("./views/Logout.vue")
    },
    {
      path: "/aboutus",
      name: 'aboutus',
      component: () => import("./views/AboutUs.vue")
    },
    {
      path: "/contactus",
      name: 'contactus',
      component: () => import("./views/ContactUs.vue")
    }

  ]
});