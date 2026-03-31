import './commands'

describe('Login', () => {

  //  it('Crie um novo usuário com sucesso', () => {     })

    it('Tente realizar login com usuário sem cadastro', () => {
        cy.login(faker.internet.email(), faker.internet.password(10))

        cy.contains('Your email or password is incorrect!')
  .should('be.visible')
    })

   // it('Realize login com sucesso', () => { })
})