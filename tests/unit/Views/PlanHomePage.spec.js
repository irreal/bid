import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import PlanHomePage from "@/views/Plans/PlanHomePage.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import initialState from "@/store/state";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import plans from "@/store/plans/plans-store";
import userFixture from "../fixtures/user";
import plansFixture from "../fixtures/plans";
import VueApexCharts from "vue-apexcharts";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueApexCharts);
localVue.component("apexchart", VueApexCharts);
Vue.use(Vuetify);

describe("Plan Home Page", () => {
  let state;

  const defaultStoreObject = () => ({
    state,
    actions,
    getters,
    mutations,
    modules: {
      plans
    }
  });
  const build = (storeObject = defaultStoreObject()) => {
    const store = new Vuex.Store(storeObject);

    const plan = shallowMount(PlanHomePage, {
      localVue,
      store
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

  it("exposes empty chart data if there are no plans", () => {
    const { plan } = build();
    expect(plan.vm.chartData[0].data).toEqual([]);

    expect(plan.vm.chartOptions.xaxis.categories).toEqual([]);
  });

  it("exposes plans through chart properties", () => {
    const { plan } = build();
    plan.setData({
      plans: plansFixture
    });
    expect(plan.vm.chartData[0].data).toEqual(
      plansFixture.map(pf => pf.percent_complete)
    );

    expect(plan.vm.chartOptions.xaxis.categories).toEqual(
      plansFixture.map(pf => pf.title)
    );
  });

  it("reacts to selecting a plan by navigating", () => {
    const { plan } = build();
    plan.vm.$router = { push: jest.fn() };
    plan.setData({
      plans: plansFixture
    });
    plan.vm.clickedItem(null, null, { selectedDataPoints: [[0]] });
    expect(plan.vm.$router.push).toBeCalledWith({
      name: "plan-detail",
      params: { planId: plansFixture[0]._id }
    });
  });
  it("reacts to selecting a plan by doing nothing if plan not found", () => {
    const { plan } = build();
    plan.vm.$router = { push: jest.fn() };
    plan.vm.clickedItem(null, null, { selectedDataPoints: [[0]] });
    expect(plan.vm.$router.push).not.toBeCalled();
  });
  it("reacts to selecting a plan by doing nothing if selected data point is not provided ", () => {
    const { plan } = build();
    plan.vm.$router = { push: jest.fn() };
    plan.vm.clickedItem(null, null, { selectedDataPoints: [[undefined]] });
    expect(plan.vm.$router.push).not.toBeCalled();
  });
});
