import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import PlanDetailsPage from "@/views/Plans/PlanDetailsPage.vue";
import PlanHeader from "@/components/Plans/PlanHeader";
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

describe("Plan Details Page", () => {
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

    const plan = shallowMount(PlanDetailsPage, {
      localVue,
      components: { PlanHeader },
      mocks: {
        $route: {
          params: {
            planId: plansFixture[0]._id
          }
        }
      },
      store
    });

    return {
      plan,
      store
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });

  it("renders the component", () => {
    // arrange
    state.user = userFixture;
    const { plan } = build();
    // assert
    expect(plan.html()).toMatchSnapshot();
  });

  it("loads the plan from the plan Id and passes it to child controls", async () => {
    const { plan, store } = build();
    store.replaceState({ ...store.state, plans: { items: plansFixture } });
    expect(plan.vm.plan).toEqual(plansFixture[0]);
    const planHeader = plan.find(PlanHeader);
    expect(planHeader.props().plan).toEqual(plansFixture[0]);
  });
});
