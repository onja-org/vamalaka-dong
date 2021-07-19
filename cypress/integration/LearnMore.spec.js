/// <reference types="cypress" />

describe('learn more', () => {
    beforeEach('visits learn more story', () => {
        cy.visit('http://localhost:6006')
        cy.contains('LearnMore', { timeout: 20000 })
    })
    it('Has a header and a paragraph', () => {
        cy.contains('LearnMore')
        cy.visit(
          'http://localhost:6006/iframe.html?id=components-learnmore--learn-more-container&args=&viewMode=story'
        )
        cy.contains('Madagascars peer-to-peer e-commerce platform')
        cy.contains(
          'Purchase high-quality products made by the people that sell them. By cutting out middlemen, you know exactly where your purchase is from and how it was made.'
        )
        cy.get('img').should('have.attr', 'src', 'static/media/peer.0aa011a4.svg');
      })
})