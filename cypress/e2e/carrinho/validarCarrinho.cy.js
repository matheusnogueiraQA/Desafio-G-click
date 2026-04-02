describe('Carrinho de compras', () => {
 
  let usuario

  beforeEach(() => {
    cy.fixture('usuario').then((dado) => {
      usuario = dado
    })
  })

  it('Deve adicionar dois produtos ao carrinho e validar os itens corretos', () => {
    cy.login(usuario.email, usuario.senha)
    cy.adicionarProdutosEIrParaCarrinho()
  
    // valida produtos
    cy.contains('Blue Top').should('be.visible')
    cy.contains('Sleeveless Dress').should('be.visible')
  })
})