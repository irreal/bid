// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add(
  "login",
  (email = "milos.s.pfc@gmail.com", password = "Test1234!!") => {
    cy.request({
      method: "POST",
      url: "https://www.darex.ml/.netlify/identity/token",
      body: {
        grant_type: "password",
        username: email,
        password
      },
      form: true
    }).then(resp => {
      const token = resp.body.access_token;
      cy.request({
        method: "GET",
        url: "https://www.darex.ml/.netlify/identity/user",
        headers: { Authorization: `Bearer ${token}` }
      }).then(userResp => {
        const localStorageToken = Object.assign(userResp.body, {
          url: "https://www.darex.ml/.netlify/identity",
          token: token
        });
        localStorage.setItem("gotrue.user", JSON.stringify(localStorageToken));
      });
    });
  }
);
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })