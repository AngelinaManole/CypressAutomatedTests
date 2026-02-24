/// <reference types = 'Cypress'/>

describe('Test', function(){
    it('should return to the home page efter making an order',function(){

    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('berry');
    cy.get('.products', {timeout:5000}).should('be.visible');
    cy.get('.products').each(($el, index, $list)=>{

        for(let index = 0; index <= 1; index++){
            cy.get('.products').find('.product').eq(index).contains('ADD TO CART').click();
        }
    })
    cy.get('.cart-icon').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
    cy.get('select').select('Romania');
    cy.get('.chkAgree').check();
    // cy.contains('Proceed').click();
    cy.get('button').click();
    cy.get('.search-keyword', {timeout:10000}).should('be.visible');
    // cy.wait('@search');
    cy.location('pathname').should('eq', '/seleniumPractise/');
    
    })
})

