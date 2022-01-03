/// <reference types="cypress" />

describe('Handling Web Controls UI', function(){
    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it.only('Check box', function(){
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      cy.get('input[type=checkbox]').check(['option2','option3']) //['option2','option3'] lấy value

      //Static Dropdown 
      cy.get('#dropdown-class-example').select('Option2').should('have.value','option2') //select() có thế select theo value, text,...
      // hàng trên có thể sửa thành should('have.value','option1') => để cho biết cypress có thể tìm lỗi giúp

      //Dynamic Dropdown
      cy.get('#autocomplete').type('Ind')

      cy.get('li.ui-menu-item div').each(($el,index,$list) => {
        if($el.text() == "India"){
            cy.wrap($el).click()
        }
      })
      cy.get('#autocomplete').should('have.value','India')



    })

    it('Second Test', function(){

    })
})