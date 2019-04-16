describe("Dashboard page", () => {
  it("Shows logged in user's name", () => {
    cy.login().then(() => {
      const user = JSON.parse(localStorage.getItem("gotrue.user"));
      cy.visit("/");
      cy.contains(user.user_metadata.full_name);
    });
  });
  it("Toggles the menu", () => {
    cy.login();
    cy.visit("/");
    cy.get("[data-test=menu-button-sale-plans").should("not.be.visible");
    cy.get("[data-test=menu-toggle]").click();
    cy.get("[data-test=menu-button-sale-plans").should("be.visible");
  });

  it("always shows the menu on larger screens", () => {
    cy.login();
    cy.viewport(1920, 1080);
    cy.visit("/");
    cy.get("[data-test=menu-button-sale-plans").should("be.visible");
    cy.get("[data-test=menu-toggle]").click();
    cy.get("[data-test=menu-button-sale-plans").should("not.be.visible");
  });
});
