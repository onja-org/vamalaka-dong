/// <reference types="cypress" />
describe('Storybook Components', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Login', { timeout: 20000 })
  })
  it('has Login component', () => {
    cy.contains('Login')
    cy.visit(
      'http://localhost:6006/?path=/story/components-login--login-onboard-story'
    )
    cy.get('div')
  })

  it('has LeftSide component', () => {
    cy.contains('LeftSide')
    cy.visit(
      'http://localhost:6006/?path=/story/components-login--login-onboard-story'
    )
  })

  it('has Back component', () => {
    cy.contains('Back')
    cy.visit(
      'http://localhost:6006/?path=/story/components-login--login-onboard-story'
    )
  })

  it('has Input component', () => {
    cy.contains('Input')
    cy.visit(
      'http://localhost:6006/?path=/story/components-login--login-onboard-story'
    )
  })

  it('has Buttons component', () => {
    cy.contains('Button')
    cy.visit(
      'http://localhost:6006/?path=/story/components-login--login-onboard-story'
    )
  })
})
