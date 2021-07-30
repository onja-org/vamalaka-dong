/// <reference types="cypress" />

describe("home page", () => {
    beforeEach('visits home page story', () => {
        cy.visit('http://localhost:6006')
        cy.contains('HomePage', {timeout: 20000})
    })
    it('Has a header component', () => {
        cy.contains('HomePage')
        cy.visit("http://localhost:6006/iframe.html?id=pages-homepage--home-page-story&args=&viewMode=story")
        cy.get("img").should('have.attr', 'src', "static/media/vamalaka.fa234799.svg");
        cy.get('h3').contains("Madagascars peer-to-peer e-commerce platform");
        cy.get('button').contains("Learn how it works");
        cy.get('p').contains("This is a subtitle that is very informative");
        cy.get('button').contains("Discover Products")
    })
})