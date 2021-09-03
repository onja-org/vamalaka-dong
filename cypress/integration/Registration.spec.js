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
  })
  it('has a header', () => {
    cy.contains('Registration')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registration--valid-form'
    )
  })
  it('has input component', () => {
    cy.contains('Input')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registration--valid-form'
    )
  })
  it('has a condition term', () => {
    cy.contains('TermsAndConditions')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registration--valid-form'
    )
  })
  it('has buttons', () => {
    cy.contains('Button')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registration--valid-form'
    )
  })
})
