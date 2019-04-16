import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Welcome from "@/components/Dashboard/Welcome";
import Vuetify from "vuetify";
import Vue from "vue";
import initialState from "@/store/state";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import userFixture from "../../fixtures/user";

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe("Welcome component", () => {
  let state;

  const build = () => {
    const welcome = shallowMount(Welcome, {
      localVue,
      store: new Vuex.Store({ state, actions, getters, mutations })
    });

    return {
      welcome
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });
  it("renders the component", () => {
    // arrange
    const { welcome } = build();
    // assert
    expect(welcome.html()).toMatchSnapshot();
    expect(welcome.html()).toContain("neulogovani korisnik");
  });

  it("renders the component with a logged in user", () => {
    // arrange
    state.user = userFixture;
    const { welcome } = build();
    // assert
    expect(welcome.html()).toMatchSnapshot();
    expect(welcome.html()).toContain(userFixture.user_metadata.full_name);
  });
});
