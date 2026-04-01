import { gerarUsuario } from '../../support/utils'

describe('Validar API createUserAccount', () => {
  let usuarioBase

  beforeEach(() => {
    cy.fixture('usuarioAPI').then((dado) => {
      usuarioBase = dado
    })
  })

  it('Crie usuário com sucesso', () => {
    // cria usuário fake
    const usuarioCriado = gerarUsuario(usuarioBase)

    // chama endpoint createUserAccount
    cy.criarUsuarioAPI(usuarioCriado).then((response) => {
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