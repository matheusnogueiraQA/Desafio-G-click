import { faker } from "@faker-js/faker"

describe('Login', () => {
 
  let usuario

  beforeEach(() => {
    cy.fixture('usuario').then((dado) => {
      usuario = dado
    })
  })

  it('Tente realizar login com usuário sem cadastro', () => {
    const emailNãoCadastrado = faker.internet.email()
    const senhaNãoCadastrado = faker.internet.password(10)

    cy.login(emailNãoCadastrado, senhaNãoCadastrado)

    cy.contains('Your email or password is incorrect!')
      .should('be.visible')
  })

  it('Realize login com sucesso', () => {
    cy.login(usuario.email, usuario.senha)
    // valida login
    cy.contains('Logged in as')
      .should('be.visible')
  })

  it('Realize logout com sucesso', () => {
    cy.login(usuario.email, usuario.senha)
    // valida login
    cy.contains('Logged in as')
      .should('be.visible')
    cy.contains('Logout').click()

    // valida logout
    cy.contains('Signup / Login')
      .should('be.visible')
  })
})