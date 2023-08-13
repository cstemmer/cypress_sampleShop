import login from '../objects/login.obj'

Cypress.Commands.add('loginFrontEnd',
    (email = 'jjvwpyqcbp@test.com', password = Cypress.env('password')) => {
        cy.visit('/login')
        cy.get(login.emailInput).type(email)
        cy.get(login.passwordInput).type(password)
        cy.get(login.loginButton).click()
    })
