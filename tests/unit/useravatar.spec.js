import { expect } from "chai";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import UserAvatar from "@/components/UserAvatar.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("UserAvatar.vue", () => {
  let getters;
  let store;

  it("renders initials", () => {
    getters = {
      getUser: () => ({ user_metadata: { full_name: "Miloš Spasoejvić" } }),
      getUserStatus: () => true
    };

    store = new Vuex.Store({
      getters
    });

    const msg = "MS";
    const wrapper = shallowMount(UserAvatar, {
      store,
      localVue
    });
    expect(wrapper.text()).to.include(msg);
  });

  it("uppercases initials", () => {
    getters = {
      getUser: () => ({ user_metadata: { full_name: "miloš spasoejvić" } }),
      getUserStatus: () => true
    };

    store = new Vuex.Store({
      getters
    });

    const msg = "MS";
    const wrapper = shallowMount(UserAvatar, {
      store,
      localVue
    });
    expect(wrapper.text()).to.include(msg);
  });

  it("handles no user", () => {
    getters = {
      getUser: () => null,
      getUserStatus: () => false
    };

    store = new Vuex.Store({
      getters
    });

    const wrapper = shallowMount(UserAvatar, {
      store,
      localVue
    });
    expect(wrapper.text()).to.equal("N/A");
  });

  it("handles single name", () => {
    getters = {
      getUser: () => ({ user_metadata: { full_name: "milos" } }),
      getUserStatus: () => true
    };

    store = new Vuex.Store({
      getters
    });

    const msg = "M";
    const wrapper = shallowMount(UserAvatar, {
      store,
      localVue
    });
    expect(wrapper.text()).to.include(msg);
  });
});
