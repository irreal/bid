export default {
  setUser: (state, currentUser) => {
    state.user = currentUser;
  },
  toggleMenu(state, value) {
    state.menuOpen = value;
  },
  removePlans(state) {
    state.plans = [];
  }
};
