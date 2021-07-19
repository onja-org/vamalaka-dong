/// <reference types='cypress'/>
describe('Top Categories', () => {
  beforeEach('top categories component', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Button', { timeout: 20000 })
  })
  it('Has top categories component', () => {
    cy.contains('Button')
    cy.visit(
      'http://localhost:6006/?path=/story/components-topcategories--categories'
    )
    cy.contains('Top categories')
  })
})
