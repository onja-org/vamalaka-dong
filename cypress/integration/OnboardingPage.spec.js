/// <reference types="cypress" />

describe('Onboarding Page', () => {
    beforeEach('visits site', () => {
        cy.visit('http://localhost:6006')
        cy.contains('OnboardingPage', {timeout: 20000})
    })
    it('has role selector component', () => {
        cy.contains("RoleSelectOnboard")
        cy.visit("http://localhost:6006/iframe.html?id=pages-onboardingpage--onboarding-page-story&args=&viewMode=story")
    })
    it('has registration oboarding component', () => {
        cy.contains("RegistrationOnboarding")
        cy.visit("http://localhost:6006/iframe.html?id=pages-onboardingpage--onboarding-page-story&args=&viewMode=story")
    })
})