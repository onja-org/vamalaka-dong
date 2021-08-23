/// <reference types="cypress" />

describe('LoginReminder Storybook', () => {
  beforeEach('visits storybook', () => {
    cy.visit(
      'http://localhost:6006/?path=/story/loginreminder-loginreminder--already-have-an-account'
    )
    cy.contains('LoginReminder', { timeout: 20000 })
  })

  it('Already have an account', () => {
    cy.contains('LoginReminder')
    cy.visit(
      'http://localhost:6006/?path=/story/loginreminder-loginreminder--already-have-an-account'
    )
    cy.get('div').contains('p')
  })

  it('Has the not yet a user text', () => {
    cy.contains('LoginReminder')
    cy.visit(
      'http://localhost:6006/?path=/story/loginreminder-loginreminder--not-user'
    )
    cy.get('div').contains('p')
  })

  it('Has the anchor an href attribute', () => {
    cy.get('a').should('have.attr', 'href')
  })
})
