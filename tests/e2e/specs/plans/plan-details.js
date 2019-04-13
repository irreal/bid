describe("plan details page", () => {
  it("shows basic plan info", () => {
    cy.login();
    cy.mockPlansRoute();
    cy.fixture("plans.json").then(plans => {
      cy.visit(`/plan-detail/${plans[0]._id}`);
      cy.contains(plans[0].title);
      cy.contains(`${Math.round(plans[0].percent_complete)}%`);
      cy.contains(plans[0].created_by);
    });
  });
});
