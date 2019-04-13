describe("Dashboard page", () => {
  it("Shows logged in user's name", () => {
    // cy.viewport(1920, 1080);
    // cy.viewport("iphone-3");
    cy.login().then(() => {
      const user = JSON.parse(localStorage.getItem("gotrue.user"));
      cy.visit("/");
      cy.contains(user.user_metadata.full_name);
    });
  });
});
