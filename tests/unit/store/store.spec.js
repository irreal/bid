import store from "@/store/index";
import initialState from "@/store/state";
import userFixture from "../fixtures/user";
describe("root store", () => {
  beforeEach(() => {
    store.replaceState({ ...initialState });
  });

  it("instantiates with default state", () => {
    expect(store.state.user).toBe(null);
  });
  it("commits the user", () => {
    store.commit("setUser", userFixture);
    expect(store.state.user).toBe(userFixture);
  });
  it("loads the user", () => {
    store.dispatch("updateUser", { currentUser: userFixture });
    expect(store.state.user).toBe(userFixture);
  });
});
