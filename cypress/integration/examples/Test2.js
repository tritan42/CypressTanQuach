/// <reference types="cypress" /> 

// add "///" above

describe ('My First Test Suite', function()
{
    it('My First Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca') 
        cy.wait(2000)
        cy.get('.products').find('.product').should('have.length', 4) 
    
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){   
                cy.wrap($el).find('button').click() 
            }
        })

        cy.get('a.cart-icon').click()
        cy.get('button[type=button]').contains('PROCEED TO CHECKOUT').click()
        //cy.wait(1000)
        cy.contains('Place Order').click()




         


    })
})