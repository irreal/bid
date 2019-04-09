import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Login from "@/views/Login";
import Vuetify from "vuetify";
import initialState from "@/store/state";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import userFixture from "./fixtures/user";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

describe("Login Page", () => {
  let state;

  const build = () => {
    const login = shallowMount(Login, {
      localVue,
      store: new Vuex.Store({ state, actions, getters, mutations })
    });

    return {
      login
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });
  it("renders the component", () => {
    // arrange
    const { login } = build();
    // assert
    expect(login.html()).toMatchSnapshot();
  });

  it("gets logged in status and user from the store", () => {
    const { login } = build();
    expect(login.vm.isLoggedIn).toBe(false);
    expect(login.vm.user).toBe(null);

    state.user = userFixture;
    expect(login.vm.isLoggedIn).toBe(true);
    expect(login.vm.user).toBe(userFixture);
  });
});
