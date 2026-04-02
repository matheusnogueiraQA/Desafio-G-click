describe('Login', () => {

  let user

  beforeEach(() => {
    cy.fixture('user').then((data) => {
      user = data
    })
  })

  it('Tente realizar login com usuário sem cadastro', () => {
    cy.loginSemCadastro()
  })

  it('Deve realizar login com sucesso', () => {
    cy.login(user.email, user.password)
  })

  it('Deve realizar logout com sucesso', () => {
    cy.login(user.email, user.password)
    cy.contains('Logout').click()

    // valida logout
    cy.contains('Signup / Login')
      .should('be.visible')
  })
})