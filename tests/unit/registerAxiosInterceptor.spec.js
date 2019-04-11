import axios from "axios";
import registerAxiosInterceptor from "@/registerAxiosInterceptor";
import netlifyWidget from "netlify-identity-widget";

describe("axios interceptor", () => {
  it("adds the authorization header when user is logged in", () => {
    jest.mock("netlify-identity-widget");
    netlifyWidget.currentUser = jest.fn(() => {
      return {
        jwt: () => {
          return Promise.resolve("fake token");
        }
      };
    });
    registerAxiosInterceptor();
    expect(axios.interceptors.request.handlers.length).toBeTruthy();
    const resp = axios.interceptors.request.handlers[0].fulfilled({
      url: "/.netlify/functions/plans",
      headers: {}
    });
    return resp.then(p => {
      expect(p.headers.Authorization).toEqual("Bearer fake token");
    });
  });
  it("does not add the authorization header when user is not logged in", () => {
    jest.mock("netlify-identity-widget");
    netlifyWidget.currentUser = jest.fn(() => {
      return null;
    });
    registerAxiosInterceptor();
    expect(axios.interceptors.request.handlers.length).toBeTruthy();
    const resp = axios.interceptors.request.handlers[0].fulfilled({
      url: "/.netlify/functions/plans",
      headers: {}
    });

    expect(resp.headers.Authorization).not.toBeDefined();
  });
  it("returns the error when request crashes", () => {
    registerAxiosInterceptor();
    expect(axios.interceptors.request.handlers.length).toBeTruthy();
    const resp = axios.interceptors.request.handlers[0].rejected(
      new Error("fake error")
    );
    return resp.catch(e => {
      expect(e).toEqual(new Error("fake error"));
    });
  });
});
