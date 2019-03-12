import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import PlanHomePage from './views/Plans/PlanHomePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/plans',
      name: 'plans',
      // component: () => import('./views/Plans/PlanHomePage.vue'),
      component: () => import('./views/About.vue'),
    },
  ],
});
