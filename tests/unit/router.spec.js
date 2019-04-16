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

  it("loads home route component", () => {
    return router.options.routes
      .find(r => r.name === "home")
      .component()
      .then(resp => {
        expect(resp).toBeDefined();
      });
  });
  it("loads login route component", () => {
    const component = router.options.routes.find(r => r.name === "login")
      .component;
    expect(component).toBeDefined();
  });
  it("loads plans route component", () => {
    return router.options.routes
      .find(r => r.name === "plans")
      .component()
      .then(resp => {
        expect(resp).toBeDefined();
      });
  });
  it("loads plan detail route component", () => {
    return router.options.routes
      .find(r => r.name === "plan-detail")
      .component()
      .then(resp => {
        expect(resp).toBeDefined();
      });
  });
});
