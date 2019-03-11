// https://docs.cypress.io/api/introduction/api.html

describe('My Second Test', () => {
  it('Visits the app root url', () => {
    cy.wait(3000)
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App')
  })
})
