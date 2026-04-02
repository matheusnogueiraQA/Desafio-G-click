import { gerarUsuario } from '../support/utils'

describe('Create User API', () => {
  let userBase

  beforeEach(() => {
    cy.fixture('userAPI').then((data) => {
      userBase = data
    })
  })

  it('Deve criar usuário com sucesso', () => {
    // cria usuário fake
    const userCreated = gerarUsuario(userBase)

    // chama endpoint createUserAccount
    cy.criarUsuarioAPI(userCreated).then((response) => {
      // valida status http
      expect(response.status).to.eq(200)

      // garante que o body é objeto
      const body = typeof response.body === 'string'
        ? JSON.parse(response.body)
        : response.body
      // valida resposta da API
      expect(body.responseCode).to.eq(201)
      expect(body.message).to.eq('User created!')
    })
  })
})