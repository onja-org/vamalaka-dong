/// <reference types="cypress" />

describe('Registration Screen', () => {
    beforeEach('visits site', () => {
        cy.visit('http://localhost:6006')
        cy.contains('RegistrationOnboarding', {timeout: 20000})
    })
    it('has a header', () => {
        cy.contains("RegistrationOnboarding")
        cy.visit("http://localhost:6006/iframe.html?id=components-registrationonboarding--registration-page-story&args=&viewMode=story")
        cy.get("h3").contains("Register your account")
    })
    it('has an image banner', () => {
        cy.contains('RegistrationOnboarding')
        cy.visit("http://localhost:6006/iframe.html?id=components-registrationonboarding--registration-page-story&args=&viewMode=story")
        cy.get('p').contains("Discover amazing products and profit from a truly fair market")
    })
    it('has back button', () => {
        cy.contains("Back")
        cy.visit("http://localhost:6006/iframe.html?id=components-registrationonboarding--registration-page-story&args=&viewMode=story")
        cy.get("a").should('have.attr', "href", "/")
        cy.get("span").contains("Back")
    })
    it('has input component', () => {
        cy.contains("Input")
        cy.visit("http://localhost:6006/iframe.html?id=components-registrationonboarding--registration-page-story&args=&viewMode=story")
        cy.get("label").contains("Your username")
        cy.get("input").should('have.attr', 'placeholder', "Username")
    })
    it('has a condition term', () => {
        cy.contains("TermsAndConditions")
        cy.visit("http://localhost:6006/iframe.html?id=components-registrationonboarding--registration-page-story&args=&viewMode=story")
        cy.get("span").contains("I agree to the")
        cy.get('a').contains("terms & conditions")
    })
    it('has buttons', () => {
        cy.contains("Button")
        cy.visit("http://localhost:6006/iframe.html?id=components-registrationonboarding--registration-page-story&args=&viewMode=story")
        cy.get("button").contains("Register account")
        cy.get("button").contains("Register with Google")
    })
})