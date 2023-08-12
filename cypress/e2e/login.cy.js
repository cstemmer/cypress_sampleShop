import login from '../objects/login.obj'
import header from '../objects/header.obj'

describe('Login', () => {
    const password = Cypress.env('password')
    const validUser = 'jjvwpyqcbp@test.com'

  it('user can login with valid credentials', () => {
        cy.visit('/login')
        cy.get(login.loginHeader).should('be.visible')
            .and('have.text', 'Login to your account')
        cy.get(login.emailInput).should('be.visible')
            .and('have.attr', 'placeholder', 'Email Address')
            .type(validUser)
        cy.get(login.passwordInput).should('be.visible')
            .and('have.attr', 'placeholder', 'Password')
            .type(password)
        cy.get(login.loginButton).should('have.text', 'Login')
            .click()
        cy.get(header.authButton).should('be.visible')
                .and('have.attr', 'href', '/logout')
                .and('have.text', ' Logout')
  })

  it('user cannot login with invalid password', () => {
          cy.visit('/login')
          cy.get(login.loginHeader).should('be.visible')
              .and('have.text', 'Login to your account')
          cy.get(login.emailInput).should('be.visible')
              .and('have.attr', 'placeholder', 'Email Address')
              .type(validUser)
          cy.get(login.passwordInput).should('be.visible')
              .and('have.attr', 'placeholder', 'Password')
              .type('wrong_password')
          cy.get(login.loginButton).should('have.text', 'Login')
              .click()
          cy.get(header.authButton).should('be.visible')
                  .and('have.attr', 'href', '/login')
                  .and('have.text', ' Signup / Login')
          cy.get(login.errorMessage).should('be.visible')
                .and('have.text', 'Your email or password is incorrect!')
    })

    it('user cannot login with invalid email', () => {
              cy.visit('/login')
              cy.get(login.loginHeader).should('be.visible')
                  .and('have.text', 'Login to your account')
              cy.get(login.emailInput).should('be.visible')
                  .and('have.attr', 'placeholder', 'Email Address')
                  .type('not_a_user@email.test')
              cy.get(login.passwordInput).should('be.visible')
                  .and('have.attr', 'placeholder', 'Password')
                  .type(password)
              cy.get(login.loginButton).should('have.text', 'Login')
                  .click()
              cy.get(header.authButton).should('be.visible')
                      .and('have.attr', 'href', '/login')
                      .and('have.text', ' Signup / Login')
              cy.get(login.errorMessage).should('be.visible')
                    .and('have.text', 'Your email or password is incorrect!')
        })

})
