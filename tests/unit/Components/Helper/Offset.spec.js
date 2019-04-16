import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Offset from "@/components/Helper/Offset";
import Vuetify from "vuetify";
import Vue from "vue";

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe("Offset helper", () => {
  it("renders the component", () => {
    // arrange
    const oh = shallowMount(Offset);
    // assert
    expect(oh.html()).toMatchSnapshot();
  });

  it("renders the component with slots", () => {
    // arrange
    const oh = shallowMount(Offset, {
      slots: {
        default: "<p>this content is offset</p>"
      }
    });
    // assert
    expect(oh.html()).toMatchSnapshot();
    expect(oh.html()).toContain("this content is offset");
  });
});
