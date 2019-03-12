import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    plans: [],
    menuOpen: false
  },
  mutations: {
    toggleMenu(state, value) {
      state.menuOpen = value;
    },
    removePlans(state) {
      state.plans = [];
    }
  },
  actions: {},
  getters: {
    plans(state) {
      return state.plans;
    },
    menuOpen(state) {
      return state.menuOpen;
    }
  }
});
