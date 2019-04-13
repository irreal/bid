import { shallowMount, createLocalVue } from "@vue/test-utils";
import { EventBus } from "@/event-bus";
import Vuex from "vuex";
import Login from "@/views/Login";
import Vuetify from "vuetify";
import Vue from "vue";
import initialState from "@/store/state";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import userFixture from "../fixtures/user";

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

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

  it("renders the component with a logged in user", () => {
    // arrange
    state.user = userFixture;
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

  it("handles and globally emits login and singup events", () => {
    jest.mock("@/event-bus");
    EventBus.$emit = jest.fn();

    const { login } = build();

    login.find("#btn-login").vm.$emit("click");

    expect(EventBus.$emit).toBeCalledWith("login");

    login.find("#btn-signup").vm.$emit("click");

    expect(EventBus.$emit).toBeCalledWith("signup");

    expect(login.find("#btn-home").vm).toBe(undefined);
    expect(login.find("#btn-logout").vm).toBe(undefined);
  });

  it("handles and globally emits logout event and navigates home", () => {
    jest.mock("@/event-bus");
    EventBus.$emit = jest.fn();

    state.user = userFixture;

    const { login } = build();
    login.vm.$router = { push: jest.fn() };

    login.find("#btn-logout").vm.$emit("click");

    expect(EventBus.$emit).toBeCalledWith("logout");

    login.find("#btn-home").vm.$emit("click");
    expect(login.vm.$router.push).toBeCalledWith({ name: "home" });

    expect(login.find("#btn-login").vm).toBe(undefined);
    expect(login.find("#btn-signup").vm).toBe(undefined);
  });
});
