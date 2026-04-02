Cypress.Commands.add('adicionarProdutosEIrParaCarrinho', () => {
  cy.visit('/products')

  cy.get('[data-product-id="3"]:visible')
    .click()
  cy.contains('button', 'Continue Shopping')
    .click()
  cy.get('[data-product-id="1"]:visible')
    .click()
  cy.contains('a', 'View Cart')
    .click()

  // valida página do carrinho
  cy.url().should('include', '/view_cart')
})
