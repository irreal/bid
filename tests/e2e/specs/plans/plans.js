describe("Plans page", () => {
  it("shows plans", () => {
    cy.login();
    cy.visit("/plans");
    cy.get("[data-test=plans-chart]").should("be.visible");
  });
});
