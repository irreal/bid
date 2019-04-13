import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import UserAvatar from "@/components/UserAvatar";
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

describe("UserAvatar component", () => {
  let state;

  const build = () => {
    const ua = shallowMount(UserAvatar, {
      localVue,
      store: new Vuex.Store({ state, actions, getters, mutations })
    });

    return {
      ua
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });

  it("renders the component", () => {
    // arrange
    const { ua } = build();
    // assert
    expect(ua.html()).toMatchSnapshot();
    expect(ua.html()).toContain("N/A");
  });

  it("renders the component with a logged in user", () => {
    // arrange
    state.user = userFixture;
    const { ua } = build();
    // assert
    expect(ua.html()).toMatchSnapshot();
    let initials = userFixture.user_metadata.full_name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    expect(ua.html()).toContain(initials);
  });
});
