/// <reference types = 'cypress' />
describe('Calendar test', function(){
    it('Verify date selection', function(){


        cy.visit('https://rahulshettyacademy.com/seleniumPractise');

        cy.get('.cart-header-navlink').contains('Top Deals').invoke('removeAttr', 'target').click();
        
        const monthNumber = '6';
        const date = '15';
        const year = '2027';
        const expectedList = [monthNumber, date, year];


        cy.get('.react-date-picker__inputGroup__day').click();
        cy.get('.react-calendar__navigation__label').click();
        cy.get('.react-calendar__navigation__label').click();
        cy.contains('button', year).click();
        cy.get('.react-calendar__year-view__months').find('button').eq(Number(monthNumber) - 1).click();
        cy.contains('abbr', date).click();



         cy.get('.react-date-picker__inputGroup input[type="number"]').each(($el, index)=>{
            
            cy.wrap($el).invoke('val').should('eq', expectedList[index]);
            });
            
         })

    })
