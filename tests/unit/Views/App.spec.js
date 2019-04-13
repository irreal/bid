import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from "@/App";
import Vuetify from "vuetify";
import Vue from "vue";
import initialState from "@/store/state";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import userFixture from "../fixtures/user";
import { EventBus } from "@/event-bus";
import netlifyIdentity from "netlify-identity-widget";

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe("App Root", () => {
  let state;

  const build = () => {
    const app = mount(App, {
      localVue,
      stubs: ["router-link", "router-view"],
      store: new Vuex.Store({ state, actions, getters, mutations })
    });

    return {
      app
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });
  it("renders the component", () => {
    // arrange
    const { app } = build();
    // assert
    expect(app.html()).toMatchSnapshot();
    app.destroy();
  });

  it("renders the component with a logged in user", () => {
    // arrange
    state.user = userFixture;
    const { app } = build();
    // assert
    expect(app.html()).toMatchSnapshot();
    app.destroy();
  });

  it("navigates to plans when menu item clicked", () => {
    state.user = userFixture;
    const { app } = build();
    app.vm.$router = { push: jest.fn() };
    app.find(".menu-item-plans").vm.$emit("click");

    expect(app.vm.$router.push).toBeCalledWith("plans");
    app.destroy();
  });

  it("responds to global events for netlify auth", () => {
    jest.mock("netlify-identity-widget");
    netlifyIdentity.open = jest.fn();
    netlifyIdentity.close = jest.fn();
    netlifyIdentity.logout = jest.fn();
    netlifyIdentity.on = (action, userCB) => {
      userCB(userFixture);
    };
    const { app } = build();
    app.vm.$router = { push: jest.fn() };

    EventBus.$emit("login");
    expect(netlifyIdentity.open).toBeCalledWith("login");
    expect(netlifyIdentity.close).toBeCalled();
    expect(app.vm.$router.push).toBeCalledWith({ name: "home" });

    EventBus.$emit("logout");
    expect(netlifyIdentity.logout).toBeCalled();
    expect(app.vm.$router.push).toBeCalledWith({ name: "login" });

    netlifyIdentity.close = jest.fn();
    app.vm.$router = { push: jest.fn() };
    EventBus.$emit("signup");
    expect(netlifyIdentity.open).toBeCalledWith("signup");
    expect(netlifyIdentity.close).toBeCalled();
    expect(app.vm.$router.push).toBeCalledWith({ name: "home" });

    netlifyIdentity.on = (action, userCB) => {
      userCB(null);
    };
    netlifyIdentity.close = jest.fn();
    app.vm.$router = { push: jest.fn() };
    EventBus.$emit("login");
    expect(netlifyIdentity.open).toBeCalledWith("login");
    expect(netlifyIdentity.close).toBeCalled();
    app.vm.$router.push = jest.fn();
    expect(app.vm.$router.push).not.toBeCalledWith({ name: "home" });

    app.vm.$router.push = jest.fn();
    netlifyIdentity.open = jest.fn();
    netlifyIdentity.close = jest.fn();
    netlifyIdentity.logout = jest.fn();
    netlifyIdentity.on = (action, userCB) => {
      userCB(userFixture);
    };
    app.vm.triggerNetlifyIdentityAction("unknown action");
    expect(app.vm.$router.push).not.toBeCalled();
    expect(netlifyIdentity.open).not.toBeCalled();
    expect(netlifyIdentity.close).not.toBeCalled();
    expect(netlifyIdentity.logout).not.toBeCalled();

    app.destroy();
  });

  it("reads username correctly", () => {
    const loggedOut = build();
    const username = loggedOut.app.vm.username;
    expect(username).toBe("neulogovani korisnik");
    loggedOut.app.destroy();

    state.user = userFixture;
    const loggedIn = build();
    const usernameLoggedIn = loggedIn.app.vm.username;
    expect(usernameLoggedIn).toBe(userFixture.user_metadata.full_name);
    loggedIn.app.destroy();
  });
});
