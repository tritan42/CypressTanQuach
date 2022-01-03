/// <reference types="cypress" /> 

// add "///" above

describe ('My First Test Suite', function()
{
    it('My First Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca') //input[type='search'] //.search-keyword
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4) //":visible"
        
    //Parent Child chaining
        
        cy.get('.product').should('have.length', 5) //Case2
        
        cy.get('.products').find('.product').should('have.length', 4) //Case3 => ap dung Parent Child chaining

        //console.log("hello")
        
    // ADD TO CART BASIC
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        
        cy.get(':nth-child(2) > .product-action > button').click() //Cach 2 => Su Dung Selector Playground trong Test Runner

    // ADD TO CART ADVANCE => Find product name then add
        cy.get('.products').find('.product').each(($el, index, $list) => {
          
            const textVeg = $el.find('h4.product-name').text()
           
            if(textVeg.includes('Cashews')){  //hàm includes là của Javascript <= để xét 1 đoạn string nhỏ trong 1 string lớn  
                cy.wrap($el).find('button').click() //cy.wrap(promise) => ưu tiên hoàn thành promise trước => tránh bị gạch
                
                // hoặc có thể sử dụng $el.contains('ADD TO CART').click() thì click() sẽ không bị gạch
            //    $el.contains('ADD TO CART').click()
            }
        })

//===================================================================

    //this is to print in logs
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())

            //const logo2 = logoelement.text()
            //cy.log(logo2)
        })

    //assertion
        cy.get('.brand').should('have.text','GREENKART')

//==================================================================================
    //Example for using alias
        cy.get('.products').as('productLocator')
        cy.get('@productLocator')

        console.log('abc') // not relate to Cypress

        // có thể sử dụng cách này để async
        // .then(function(){
        //     console.log('xyz')
        // })
    })
})