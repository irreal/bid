describe("plan detail page", () => {
  it("opens", () => {
    cy.login();
    cy.visit("/plan-detail/123");
  });
});
