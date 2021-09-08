/// <reference types="cypress" />

describe('RegisteredSuccessfull Screen', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('RegisteredSuccessfull', { timeout: 20000 })
  })
  it('has LeftSide', () => {
    cy.contains('LeftSide')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registeredsuccessfull--valid-form'
    )
  })
  it('has the step text', () => {
    cy.contains('div', 'Step 03/03')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registeredsuccessfull--valid-form'
    )
  })
  it('has the step text', () => {
    cy.contains('h3', 'Registration successfull !')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registeredsuccessfull--valid-form'
    )
  })
  it('has the step text', () => {
    cy.contains('a', 'Go to login page')
    cy.visit(
      'http://localhost:6006/?path=/story/components-registeredsuccessfull--valid-form'
    )
  })
})
