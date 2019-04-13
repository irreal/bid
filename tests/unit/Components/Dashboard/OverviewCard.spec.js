import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import OverviewCard from "@/components/Dashboard/OverviewCard";
import Vuetify from "vuetify";
import Vue from "vue";

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe("Overview Card", () => {
  it("renders the component", () => {
    // arrange
    const card = shallowMount(OverviewCard);
    // assert
    expect(card.html()).toMatchSnapshot();
  });

  it("renders the component with slots", () => {
    // arrange
    const card = shallowMount(OverviewCard, {
      slots: {
        header: "<p>this is a header</p>"
      }
    });
    // assert
    expect(card.html()).toMatchSnapshot();
    expect(card.html()).toContain("this is a header");
  });
});
