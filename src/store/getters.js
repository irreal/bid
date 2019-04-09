export default {
  getUserStatus: state => !!state.user,
  getUser: state => state.user,
  plans(state) {
    return state.plans;
  },
  menuOpen(state) {
    return state.menuOpen;
  }
};
