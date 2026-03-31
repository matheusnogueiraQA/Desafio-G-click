Cypress.Commands.add('login', (email, senha) => {
  cy.visit('https://automationexercise.com/login')

  cy.get('[data-qa="login-email"]')
    .type(email)

  cy.get('[data-qa="login-password"]')
    .type(senha)

  cy.get('[data-qa="login-button"]')
    .click()
})
