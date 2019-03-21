import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    plans: [],
    menuOpen: false,
    user: window.localStorage.getItem("user")
  },
  mutations: {
    setUser: (state, currentUser) => {
      if (!currentUser) {
        state.user = null;
        window.localStorage.removeItem("user");
        return;
      }
      let theUser = JSON.stringify(currentUser);
      state.user = theUser;
      window.localStorage.setItem("user", theUser);
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
    getUser: state => JSON.parse(state.user),
    plans(state) {
      return state.plans;
    },
    menuOpen(state) {
      return state.menuOpen;
    }
  }
});
