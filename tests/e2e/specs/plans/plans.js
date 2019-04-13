describe("Plans page", () => {
  it("shows plans", () => {
    cy.login().then(token => {
      console.log("t", token);
      cy.visit("/plans");
      cy.get("[data-test=plans-chart]").should("be.visible");
    });
  });
});
