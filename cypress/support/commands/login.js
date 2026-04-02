import { faker } from "@faker-js/faker"
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.url().should('include', '/login')

  cy.get('[data-qa="login-email"]')
    .type(email)
  cy.get('[data-qa="login-password"]')
    .type(password)
  cy.get('[data-qa="login-button"]')
    .click()

  // valida se fez login com sucesso
  cy.contains('Logged in as')
    .should('be.visible')
})

Cypress.Commands.add('loginSemCadastro', (email, password) => {
  cy.visit('/login')
  cy.url().should('include', '/login')
  const emailNãoCadastrado = faker.internet.email()
  const senhaNãoCadastrada = faker.internet.password(10)

  cy.get('[data-qa="login-email"]')
    .type(emailNãoCadastrado)
  cy.get('[data-qa="login-password"]')
    .type(senhaNãoCadastrada)
  cy.get('[data-qa="login-button"]')
    .click()
    
  // valida se fez login com sucesso
  cy.contains('Your email or password is incorrect!')
    .should('be.visible')
})