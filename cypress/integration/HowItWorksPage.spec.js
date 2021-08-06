/// <reference types="cypress" />

describe('how it works page', () => {
  beforeEach('visits how it works component', () => {
    cy.visit('http://localhost:6006')
    cy.contains('HowItWorksPage', { timeout: 20000 })
  })
  it('Has a header component', () => {
    cy.contains('HowItWorksPage')
    cy.visit(
      'http://localhost:6006/iframe.html?id=pages-howitworkspage--how-it-works-page&args=&viewMode=story'
    )
    cy.get('img').should(
      'have.attr',
      'src',
      'static/media/vamalaka.fa234799.svg'
    )
    cy.get('h3').contains('Madagascars peer-to-peer e-commerce platform')
    cy.get('button').contains('Learn more')
    cy.get('button').contains('Can you trust us?')
  })
})
