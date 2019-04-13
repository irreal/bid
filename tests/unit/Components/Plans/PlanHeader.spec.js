import { shallowMount, createLocalVue } from "@vue/test-utils";
import PlanHeader from "@/components/Plans/PlanHeader";
import Vuetify from "vuetify";
import Vue from "vue";
import plans from "../../fixtures/plans";

const localVue = createLocalVue();
Vue.use(Vuetify);

describe("Plan Header component", () => {
  const build = () => {
    const plan = shallowMount(PlanHeader, {
      localVue,
      propsData: {
        plan: plans[0]
      }
    });

    return {
      plan
    };
  };

  it("renders", () => {
    // arrange
    const { plan } = build();
    // assert
    expect(plan.html()).toMatchSnapshot();
  });
  it("displays plan title", () => {
    const { plan } = build();
    expect(plan.html()).toContain(plans[0].title);
  });

  it("displays percentage complete", () => {
    const { plan } = build();
    expect(plan.html()).toContain(Math.round(plans[0].percent_complete) + "%");
  });
  it("displays plan creator", () => {
    const { plan } = build();
    expect(plan.html()).toContain(plans[0].created_by);
  });
});
