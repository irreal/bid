import axios from "axios";
import store from "@/store";
import plansFixture from "../fixtures/plans";

const initialState = { ...store.state };
describe("plans store", () => {
  beforeEach(() => {
    store.replaceState({ ...initialState });
  });

  it("instantiates with default data", () => {
    expect(store.state.plans.items).toEqual([]);
  });

  it("gets plans", () => {
    expect(store.getters["plans/all"]).toEqual([]);
    store.replaceState({ ...initialState, plans: { items: plansFixture } });
    expect(store.getters["plans/all"]).toEqual(plansFixture);
  });
  it("finds specific plan by id", () => {
    expect(store.getters["plans/find"](plansFixture[0]._id)).not.toBeDefined();
    store.replaceState({ ...initialState, plans: { items: plansFixture } });
    expect(store.getters["plans/find"](plansFixture[0]._id)).toEqual(
      plansFixture[0]
    );
  });

  it("commits plans", () => {
    store.commit("plans/set", plansFixture);
    expect(store.state.plans.items).toEqual(plansFixture);
  });

  it("loads plans", () => {
    jest.mock("axios");
    axios.get = jest.fn(url => {
      if (url !== "/.netlify/functions/plans") {
        throw new Error("invalid url requested");
      }
      return Promise.resolve({ data: plansFixture });
    });
    store.dispatch("plans/load");
    expect(axios.get).toBeCalledWith("/.netlify/functions/plans");
    expect(store.state.plans.items).toEqual(plansFixture);
  });
});
