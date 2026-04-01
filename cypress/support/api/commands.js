// request 
Cypress.Commands.add('criarUsuarioAPI', (usuario) => {
    return cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: usuario
    })
})