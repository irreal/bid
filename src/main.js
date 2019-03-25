import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueApexCharts from "vue-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";
import netlifyWidget from "netlify-identity-widget";

const currentUser = netlifyWidget.currentUser();
store.dispatch("updateUser", { currentUser });

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
