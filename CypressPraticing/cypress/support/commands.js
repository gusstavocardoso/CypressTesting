Cypress.Commands.add("login", (username, senha) => {
    cy.get('[data-test=username]').type(username)
    cy.get('[data-test=password]').type(senha)
    cy.get('#login-button').click()
})

Cypress.Commands.add("noCarrinho", (texto, qtde) => {
    cy.get('.fa-layers-counter').click()
    cy.get('.subheader').should('have.text', texto)
    cy.get('.btn_action').click()
    cy.get('.fa-layers-counter').should('contain', qtde) 

})

Cypress.Commands.add("noCheckout", (texto, nome, sobrenome, cep) => {
    cy.get('.subheader').should("have.text", texto)
    cy.get('[data-test=firstName]').type(nome)
    cy.get('[data-test=lastName]').type(sobrenome)
    cy.get('[data-test=postalCode]').type(cep)
    cy.get('.btn_primary').click()
})

Cypress.Commands.add("noResumo", (texto) => {
    cy.get('.subheader').should('have.text', texto)
    cy.get('.btn_action').click()
})

Cypress.Commands.add("naFinalizacao", (texto, confirmacao) => {
    cy.get('.subheader').should('have.text', texto)
    cy.get('.complete-header').should('have.text', confirmacao)
})