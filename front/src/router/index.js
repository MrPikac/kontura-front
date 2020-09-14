import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ConstructionSites from "../views/ConstructionSites.vue";
import AddConstructionSite from "../views/AddConstructionSite.vue";
import Users from "../views/Users.vue";
import AddUser from "../views/AddUser.vue";
import Profile from "../views/Profile.vue";
import Building from "../views/Building.vue";
import EditProfile from "../views/EditProfile.vue"
import EditConstructionSite from "../views/EditConstructionSite.vue"
import LogIn from "../views/LogIn.vue"
import LogOut from "../views/LogOut.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/construction-sites",
    name: "ConstructionSites",
    component: ConstructionSites
  },
  {
    path: "/add-construction-site",
    name: "AddConstructionSite",
    component: AddConstructionSite
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  },
  {
    path: "/add-user",
    name: "AddUser",
    component: AddUser
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    props: true
  },
  {
    path: "/building",
    name: "Building",
    component: Building,
    props: true
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: EditProfile,
    props: true
  },
  {
    path: "/edit-construction-site",
    name: "EditConstructionSite",
    component: EditConstructionSite,
    props: true
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/logout",
    name: "LogOut",
    component: LogOut,
  },


];

const router = new VueRouter({
  routes
});

export default router;
