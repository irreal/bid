import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import PlanHomePage from "@/views/Plans/PlanHomePage.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import initialState from "@/store/state";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import userFixture from "../fixtures/user";
import VueApexCharts from "vue-apexcharts";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueApexCharts);
localVue.component("apexchart", VueApexCharts);
Vue.use(Vuetify);

describe("Plan Home Page", () => {
  let state;

  const build = () => {
    const plan = shallowMount(PlanHomePage, {
      localVue,
      store: new Vuex.Store({ state, actions, getters, mutations })
    });

    return {
      plan
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });

  it("renders the component", () => {
    // arrange
    const { plan } = build();
    // assert
    expect(plan.html()).toMatchSnapshot();
  });

  it("renders the component with a logged in user", () => {
    // arrange
    state.user = userFixture;
    const { plan } = build();
    // assert
    expect(plan.html()).toMatchSnapshot();
  });

  it("uses the plans getter from the store", () => {});
});
