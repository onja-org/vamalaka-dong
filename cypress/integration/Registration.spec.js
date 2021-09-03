/// <reference types="cypress" />

describe('Registration Screen', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Registration', { timeout: 20000 })
  })
  it('has back button', () => {
    cy.contains('Back')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registration--valid-form'
    )
    cy.get('a').should('have.attr', 'href', '/')
    cy.get('span').contains('Back')
  })
  it('has a header', () => {
    cy.contains('Registration')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registration--valid-form'
    )
    cy.get('h3').contains('Register your account')
  })
  it('has input component', () => {
    cy.contains('Input')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registration--valid-form'
    )
    cy.get('label').contains('Your username')
    cy.get('input').should('have.attr', 'placeholder', 'Username')
  })
  it('has a condition term', () => {
    cy.contains('TermsAndConditions')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registration--valid-form'
    )
    cy.get('span').contains('I agree to the')
    cy.get('a').contains('terms & conditions')
  })
  it('has buttons', () => {
    cy.contains('Button')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registration--valid-form'
    )
    cy.get('button').contains('Register account')
    cy.get('button').contains('Register with Google')
  })
})
