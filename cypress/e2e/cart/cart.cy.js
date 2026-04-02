describe('Cart', () => {

  let user

  beforeEach(() => {
    cy.fixture('user').then((data) => {
      user = data
    })
  })
  let products

  beforeEach(() => {
    cy.fixture('product').then(data => {
      products = data
    })
  })

  it('Deve adicionar dois produtos ao carrinho e validar os itens corretos', () => {
    const selected = [products[3], products[6]]

    cy.login(user.email, user.password)
    cy.visit('/products')

    // valida se está nos produtos
    cy.url().should('include', '/products')

    // adiciona produtos
    cy.adicionarProdutos(selected)

    // valida se está no carrinho
    cy.url()
      .should('include', '/view_cart')

    //valida se os produtos selecionas estão no carrinho
    selected.forEach(p => {
      cy.get('.cart_description')
        .should('contain', p.name)
    })
  })
})