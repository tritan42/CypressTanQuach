/// <reference types="cypress" />

describe('Login', function(){
    beforeEach(function(){
        cy.visit('http://farmhouse.local.com/');
        cy.wait(60000);
    })
    it('Create a new Binder', function(){
        cy.visit('http://farmhouse.local.com/dashboard');
        cy.get('.ActionButton__actionButton__1sMBh').click()
        
    })
})