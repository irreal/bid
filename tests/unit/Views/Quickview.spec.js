import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Quickview from "@/components/Dashboard/Quickview.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import initialState from "@/store/state";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import userFixture from "../fixtures/user";
import weatherFixture from "../fixtures/weather";
import axios from "axios";
import flushPromises from "flush-promises";

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe("Quickview View", () => {
  let state;

  const defaultStoreObject = () => ({
    state,
    actions,
    getters,
    mutations
  });
  const build = (storeObject = defaultStoreObject()) => {
    const store = new Vuex.Store(storeObject);

    const quickview = shallowMount(Quickview, {
      localVue,
      store
    });

    return {
      quickview,
      store
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });

  it("renders the component", () => {
    // arrange
    const { quickview } = build();
    // assert
    expect(quickview.html()).toMatchSnapshot();
  });

  it("renders the component with a logged in user", () => {
    // arrange
    state.user = userFixture;
    const { quickview } = build();
    // assert
    expect(quickview.html()).toMatchSnapshot();
  });

  it("calls the weather lambda and displays results", async () => {
    jest.mock("axios");
    axios.get = jest.fn(() => {
      return Promise.resolve({ data: weatherFixture });
    });
    const { quickview } = build();
    await flushPromises();
    expect(axios.get).toBeCalledWith("/.netlify/functions/weather");

    expect(quickview.vm.weather.temperature).toEqual("8°");
    expect(quickview.vm.weather).toMatchSnapshot();
  });

  it("calls the weather lambda and displays nothing if call fails", async () => {
    jest.mock("axios");
    axios.get = jest.fn(() => {
      return Promise.reject(new Error("fake error"));
    });
    global.console = { error: jest.fn() };
    const { quickview } = build();
    await flushPromises();

    expect(axios.get).toBeCalledWith("/.netlify/functions/weather");

    expect(global.console.error).toBeCalledWith(
      "Error getting weather details",
      new Error("fake error")
    );

    expect(quickview.vm.weather.temperature).toEqual("--°");
    expect(quickview.vm.weather).toMatchSnapshot();
  });
});
