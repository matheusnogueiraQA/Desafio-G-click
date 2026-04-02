Cypress.Commands.add('adicionarProdutos', (produtos) => {
  produtos.forEach((p, index) => {
    const isLast = index === produtos.length - 1
    // clica no produto com id definido
    cy.get(`[data-product-id="${p.id}"]:visible`)
      .click()
    // aguarda o modal aparecer
    cy.get('#cartModal')
      .should('be.visible')

    // se for o ultimo do index, vai pro carrinho
    if (isLast) {
      cy.contains('View Cart')
        .click()
    } else {
      // clica em Contine Shopping
      cy.contains('Continue Shopping')
        .click()
      // aguarda o modal sumir
      cy.get('#cartModal')
        .should('not.be.visible')
    }
  })
})