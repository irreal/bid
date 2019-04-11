import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import netlifyWidget from "netlify-identity-widget";

Vue.use(Router);

const loginGuard = async (to, from, next) => {
  if (netlifyWidget.currentUser()) {
    next();
  } else {
    next("/login");
  }
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Dashboard.vue"),
      beforeEnter: loginGuard
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/plans",
      name: "plans",
      component: () => import("./views/Plans/PlanHomePage.vue"),
      beforeEnter: loginGuard
    },
    {
      path: "*",
      name: "default",
      redirect: "/"
    }
  ]
});
