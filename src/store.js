import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    plans: [],
    menuOpen: false,
    user: null
  },
  mutations: {
    setUser: (state, currentUser) => {
      state.user = currentUser;
    },
    toggleMenu(state, value) {
      state.menuOpen = value;
    },
    removePlans(state) {
      state.plans = [];
    }
  },
  actions: {
    updateUser: ({ commit }, payload) => {
      commit("setUser", payload.currentUser);
    }
  },
  getters: {
    getUserStatus: state => !!state.user,
    getUser: state => state.user,
    plans(state) {
      return state.plans;
    },
    menuOpen(state) {
      return state.menuOpen;
    }
  }
});
