/// <reference types="cypress" />

describe('Login', function(){
    // beforeEach(() => {
    //     cy.visit('http://farmhouse.local.com/')
    // })

    // it('My First Test Case About Login', () => {
    //     cy.get('a.Login__loginLink__1YbQi').click()
        
    //     // cy.get('input.input').type('tanquach@kms-technology.com')
    //     // cy.get('.action-button').click()
    //     // cy.get('input.password').type('Kms@2021')
    //     // cy.get('.action-button').click()
    // })

    it('Handling new Browser Window', function() {
        cy.visit('http://farmhouse.local.com/')
        cy.window().then((win) => {
          cy.stub(win, 'open', url => {
            win.location.href = ''
          }).as("popup")
        })
        cy.get('a.Login__loginLink__1YbQi').click()
        cy.get('@popup')
          .should("be.called")
        cy.get('.input').type('ce')
      })
})