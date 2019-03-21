import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/plans",
      name: "plans",
      component: () => import("./views/Plans/PlanHomePage.vue")
    }
  ]
});
