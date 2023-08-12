import header from '../objects/header.obj'

describe('Logout', () => {
    const baseUrl = Cypress.config('baseUrl')

    it('user can successfully log out', () => {
       cy.loginFrontEnd()
       cy.get(header.authButton).should('have.text', ' Logout')
        .click()
       cy.get(header.authButton).should('be.visible')
        .and('have.text', ' Signup / Login')
       cy.url().should('eq', `${baseUrl}/login`)
    })
})