/// <reference types="cypress" />

describe('Logando com o Cypress', () => {
    beforeEach(() => {
        cy.visit('')
    })    

    it.only('login sucess', () => {
        cy.login('standard_user', 'secret_sauce')        
        cy.get('.product_label') .should('contain', 'Products')
    })

    it('Login fail', () => {
        cy.login('locked_out_user', 'secret_sauce')
        cy.get('[data-test=error]')
          .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
})