/// <reference types="cypress" />

describe('Comprando com o Cypress', () => {
    before(() => {
        cy.visit('')
    })    

    it('Devo comprar 6 produtos', () => {

        cy.login('standard_user', 'secret_sauce') 
        cy.get('.product_label') .should('contain', 'Products')

        var produtos = [
            cy.get(':nth-child(1) > .pricebar > .btn_primary').click(),
            cy.get(':nth-child(2) > .pricebar > .btn_primary').click(),
            cy.get(':nth-child(3) > .pricebar > .btn_primary').click(),
            cy.get(':nth-child(4) > .pricebar > .btn_primary').click(),
            cy.get(':nth-child(5) > .pricebar > .btn_primary').click(),
            cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
        ];    

        // produtos.forEach(item => {
        //     item;
        // });

        produtos.forEach(function(item){
            item;
        })       

        // function comprar(item){
        //     item;
        // }
        
        // produtos.forEach(comprar)
        
        
        cy.noCarrinho('Your Cart', '6')
        cy.noCheckout('Checkout: Your Information', 'Cypress', 'Framework', '12345678')
        cy.noResumo('Checkout: Overview')
        cy.naFinalizacao('Finish', 'THANK YOU FOR YOUR ORDER')
        
         
       
    })
})