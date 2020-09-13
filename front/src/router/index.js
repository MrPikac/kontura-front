import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ConstructionSites from "../views/ConstructionSites.vue";
import AddConstructionSite from "../views/AddConstructionSite.vue";
import Users from "../views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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

];

const router = new VueRouter({
  routes
});

export default router;
