import Axios from "axios";

export default {
  namespaced: true,
  state: { items: [] },
  mutations: {
    set: (state, plans) => {
      state.items = plans;
    }
  },
  getters: {
    all: state => state.items,
    find: state => id => state.items.find(i => i._id === id)
  },
  actions: {
    load: ({ commit }) => {
      Axios.get("/.netlify/functions/plans").then(resp => {
        commit("set", resp.data);
      });
    }
  }
};
