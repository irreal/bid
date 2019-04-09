export default {
  updateUser: ({ commit }, payload) => {
    commit("setUser", payload.currentUser);
  }
};
