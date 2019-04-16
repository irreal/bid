// https://docs.cypress.io/api/introduction/api.html

describe("Login page", () => {
  it("Login button shows and opens iframe", () => {
    // cy.login();
    cy.visit("/login");
    cy.get("[data-test=login-button]").click();
    cy.get("#netlify-identity-widget");
  });
  it("Signup button shows and opens iframe", () => {
    cy.visit("/login");
    cy.get("[data-test=signup-button]").click();
    cy.get("#netlify-identity-widget");
  });

  it("Dashboard button shows and navigates to dashboard", () => {
    cy.login();
    cy.visit("/login");
    cy.get("[data-test=dashboard-button]").click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/");
    });
  });

  it("Logout button shows and logs the user out", () => {
    cy.login();
    cy.visit("/login");
    cy.get("[data-test=logout-button]").click();
    cy.get("[data-test=login-button");
  });
});
