import registration from '../objects/signup.obj'
import data from '../support/generate_data'
import header from '../objects/header.obj'

describe('Registration', () => {
    const baseUrl = Cypress.config('baseUrl')
    const password = Cypress.env('password')
    const userDetailsApi = 'https://automationexercise.com/api/getUserDetailByEmail'

    beforeEach(() => {
        cy.wrap(data.firstName()).as('firstName')
        cy.wrap(data.lastName()).as('lastName')
        cy.wrap(data.email()).as('email')
        cy.wrap(data.day()).as('day')
        cy.wrap(data.year()).as('year')
        cy.wrap(data.generatePostalCode(5)).as('postalCode')
        cy.wrap(data.phoneNumber('04', 10)).as('phoneNumber')
    })

    it('registers a user and checks registration ui', function () {
        cy.visit('/signup')
        cy.get(registration.signupHeader).should('be.visible')
            .and('have.text', 'New User Signup!')
        cy.get(registration.nameInput).should('be.visible')
            .and('have.attr', 'placeholder', 'Name')
            .type(this.firstName)
        cy.get(registration.emailInput).should('be.visible')
            .and('have.attr', 'placeholder', 'Email Address')
            .type(this.email)
        cy.get(registration.signupButton).should('have.text', 'Signup')
            .click()
        cy.get(registration.formHeader).should('be.visible')
            .and('have.text', 'Enter Account Information')
        cy.get(registration.titleLabel).should('be.visible')
            .and('have.text', 'Title')
        cy.get(registration.mrRadioLabel).should('be.visible')
            .and('contain', 'Mr.')
        cy.get(registration.mrsRadioLabel).should('be.visible')
            .and('contain', 'Mrs.')
        cy.get(registration.mrRadio).should('be.visible')
            .and('have.attr', 'value', 'Mr')
        cy.get(registration.mrsRadio).should('have.attr', 'value', 'Mrs')
            .click()
        cy.get(registration.nameLabel).should('be.visible')
            .and('have.text', 'Name *')
        cy.get(registration.nameField).should('be.visible')
            .and('have.attr', 'value', this.firstName)
        cy.get(registration.emailLabel).should('be.visible')
            .and('have.text', 'Email *')
        cy.get(registration.emailField).should('be.visible')
            .and('have.attr', 'value', this.email)
        cy.get(registration.passwordLabel).should('be.visible')
            .and('have.text', 'Password *')
        cy.get(registration.passwordField).should('be.visible')
            .and('have.attr', 'value', '')
            .type(password)
        cy.get(registration.birthDateLabel).should('be.visible')
            .and('have.text', 'Date of Birth')
        cy.get(registration.daySelector).should('be.visible')
            .children()
            .first()
            .then((option1) => {
                expect(option1).to.be.selected
            })
        cy.get(registration.daySelector).select(this.day)
        cy.get(registration.monthSelector).should('be.visible')
            .children()
            .first()
            .then((option1) => {
                expect(option1).to.be.selected
            })
        cy.get(registration.monthSelector).select('August')
        cy.get(registration.yearSelector).should('be.visible')
            .children()
            .first()
            .then((option1) => {
                expect(option1).to.be.selected
            })
        cy.get(registration.yearSelector).select(`19${this.year}`)
        cy.get(registration.newsletterCheckbox).click()
        cy.get(registration.newsletterCheckboxLabel).should('be.visible')
            .and('have.text', 'Sign up for our newsletter!')
        cy.get(registration.partnersCheckbox).click()
        cy.get(registration.partnersCheckboxLabel).should('be.visible')
            .and('have.text', 'Receive special offers from our partners!')
        cy.get(registration.addressHeader).should('be.visible')
            .and('have.text', 'Address Information')
        cy.get(registration.firstNameLabel).should('be.visible')
            .and('have.text', 'First name *')
        cy.get(registration.firstNameField).should('be.visible')
            .and('have.attr', 'value', '')
            .type(this.firstName)
        cy.get(registration.lastNameLabel).should('be.visible')
            .and('have.text', 'Last name *')
        cy.get(registration.lastNameField).should('be.visible')
            .and('have.attr', 'value', '')
            .type(this.lastName)
        cy.get(registration.companyLabel).should('be.visible')
            .and('have.text', 'Company')
        cy.get(registration.companyField).should('be.visible')
            .and('have.attr', 'value', '')
            .type('Google')
        cy.get(registration.addressLine1Label).should('be.visible')
            .and('contain', 'Address * ')
        cy.get(registration.addressLine1Info).should('be.visible')
            .and('have.text', '(Street address, P.O. Box, Company name, etc.)')
            .and('have.css', 'color', 'rgb(241, 51, 64)')
        cy.get(registration.addressLine1Field).should('be.visible')
            .and('have.attr', 'value', '')
            .type('Pine Cottage')
        cy.get(registration.addressLine2Label).should('be.visible')
            .and('have.text', 'Address 2')
        cy.get(registration.addressLine2Field).should('be.visible')
            .and('have.attr', 'value', '')
            .type('Sea Avenue 12')
        cy.get(registration.countryLabel).should('be.visible')
            .and('have.text', 'Country * ')
        cy.get(registration.countrySelector).should('be.visible')
            .select('New Zealand')
        cy.get(registration.stateLabel).should('be.visible')
            .and('have.text', 'State * ')
        cy.get(registration.stateField).should('be.visible')
            .and('have.attr', 'value', '')
            .type('Shire')
        cy.get(registration.cityLabel).should('be.visible')
            .and('have.text', 'City * ')
        cy.get(registration.cityField).should('be.visible')
            .and('have.attr', 'value', '')
            .type('Hobbiton')
        cy.get(registration.zipcodeLabel).should('be.visible')
            .and('have.text', 'Zipcode * ')
        cy.get(registration.zipcodeField).should('be.visible')
            .and('have.attr', 'value', '')
            .type(this.postalCode)
        cy.get(registration.phoneLabel).should('be.visible')
            .and('have.text', 'Mobile Number * ')
        cy.get(registration.phoneField).should('be.visible')
            .and('have.attr', 'value', '')
            .type(this.phoneNumber)
        // check scroll behavior and back to top button visibility
        cy.get(registration.createAccountButton).scrollIntoView()
        cy.get(registration.scrollUpButton).should('be.visible')
            .and('have.attr', 'href', '#top')
        cy.get(registration.createAccountButton).should('have.text', 'Create Account')
            .click()
        cy.request(`${userDetailsApi}?email=${this.email}`).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response)
        // expect(response.body).to.have.property('user')
        // expect(response.body.user.name).to.eq(this.firstName)
        })
        cy.url().should('eq', `${baseUrl}/account_created`)
        cy.get(registration.accountCreatedHeader).should('be.visible')
            .and('have.text', 'Account Created!')
        cy.get(registration.accountCreatedText).should('be.visible')
            .and('have.length', 2)
        cy.get(registration.accountCreatedText).eq(0).should('be.visible')
            .and('have.text', 'Congratulations! Your new account has been successfully created!')
        cy.get(registration.accountCreatedText).eq(1).should('be.visible')
            .and('have.text', 'You can now take advantage of member privileges to '
            + 'enhance your online shopping experience with us.')
        cy.get(registration.continueButton).should('have.text', 'Continue')
            .and('have.attr', 'href', '/')
            .click()
        cy.get(header.authButton).should('be.visible')
            .and('have.attr', 'href', '/logout')
        cy.get(header.userNotification).should('be.visible')
            .and('have.text', ` Logged in as ${this.firstName}`)
    })

    it('cannot register with already registered email', function () {
        cy.visit('/signup')
        cy.get(registration.nameInput)
            .type(this.firstName)
        cy.get(registration.emailInput).type('test@test.com')
        cy.get(registration.signupButton).click()
        cy.get(registration.errorMessage).should('be.visible')
            .and('have.text', 'Email Address already exist!')
            .and('have.attr', 'style', 'color: red;')
    })
})
