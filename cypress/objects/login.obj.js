const area = '#form'
const loginArea = `${area} .login-form`

module.exports = {
    // login section on login page
    loginHeader: `${loginArea} > :first-child`,
    emailInput: `${loginArea} [data-qa=login-email]`,
    passwordInput: `${loginArea} [data-qa=login-password]`,
    loginButton: `${loginArea} [data-qa=login-button]`,
    errorMessage: `${loginArea} form p`
}
