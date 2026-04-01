describe('Carrinho de compras', () => {
 
  let usuario

  beforeEach(() => {
    cy.fixture('usuario').then((dado) => {
      usuario = dado
    })
  })

  it('Adicione dois produtos ao carrinho e valide os itens corretos', () => {
    cy.login(usuario.email, usuario.senha)
    // valida login
    cy.contains('Logged in as').should('be.visible')
    cy.adicionarProdutosEIrParaCarrinho()
    // valida página do carrinho
    cy.url().should('include', '/view_cart')

    // valida produtos
    cy.get('#product-3')
    .should('be.visible')
    cy.get('#product-1')
    .should('be.visible')
  })
})