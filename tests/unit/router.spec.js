import router from "@/router";
import netlifyWidget from "netlify-identity-widget";

describe("router", () => {
  it("initializes", () => {
    expect(router).not.toEqual(null);
  });
});

describe("login guard", () => {
  it("redirects unauthorized user", () => {
    jest.mock("netlify-identity-widget");
    netlifyWidget.currentUser = jest.fn(() => {
      return false;
    });
    const next = jest.fn();

    router.options.routes[0].beforeEnter(null, null, next);
    expect(netlifyWidget.currentUser).toBeCalled();
    expect(next).toBeCalledWith("/login");
  });

  it("allows logged in user to go through", () => {
    jest.mock("netlify-identity-widget");
    netlifyWidget.currentUser = jest.fn(() => {
      return true;
    });
    const next = jest.fn();

    router.options.routes[0].beforeEnter(null, null, next);
    expect(next).toBeCalledWith();
  });
});
