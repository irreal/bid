import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueApexCharts from "vue-apexcharts";
import netlifyWidget from "netlify-identity-widget";
import registerAxiosInterceptor from "./registerAxiosInterceptor";
import { createProvider } from "./plugins/vue-apollo";

registerAxiosInterceptor();

const currentUser = netlifyWidget.currentUser();
store.dispatch("updateUser", {
  currentUser
});

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;
const apolloProvider = createProvider();
const user = netlifyWidget.currentUser();
if (user && user.token && user.token.access_token) {
  localStorage.setItem("apollo-token", user.token.access_token);
}
netlifyWidget.on("login", ({ token: { access_token } }) => {
  localStorage.setItem("apollo-token", access_token);
});
netlifyWidget.on("logout", () => {
  localStorage.removeItem("apollo-token");
});
new Vue({
  router,
  store,
  apolloProvider: apolloProvider,
  render: h => h(App)
}).$mount("#app");
