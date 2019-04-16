import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueApexCharts from "vue-apexcharts";
import netlifyWidget from "netlify-identity-widget";
import registerAxiosInterceptor from "./registerAxiosInterceptor";
import { createProvider } from "./vue-apollo";

registerAxiosInterceptor();

const currentUser = netlifyWidget.currentUser();
store.dispatch("updateUser", {
  currentUser
});

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
