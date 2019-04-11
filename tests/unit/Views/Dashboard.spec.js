import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Dashboard from "@/views/Dashboard";
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

describe("Dashboard Page", () => {
  let state;

  const build = () => {
    const dashboard = shallowMount(Dashboard, {
      localVue,
      store: new Vuex.Store({ state, actions, getters, mutations })
    });

    return {
      dashboard
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });
  it("renders the component", () => {
    // arrange
    const { dashboard } = build();
    // assert
    expect(dashboard.html()).toMatchSnapshot();
  });

  it("renders the component with a logged in user", () => {
    // arrange
    state.user = userFixture;
    const { dashboard } = build();
    // assert
    expect(dashboard.html()).toMatchSnapshot();
  });
});
