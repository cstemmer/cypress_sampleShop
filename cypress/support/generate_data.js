function pad2(number) {
    return (number < 10 ? '0' : '') + number
}

function generateString(length) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    for (let i = 0; i < length; i += 1) {
        result += alphabets.charAt(Math.floor(Math.random() * alphabets.length)).toUpperCase()
    }

    return result
}

function email(domain = 'test.com') {
    const userEmail = `${generateString(10)}@${domain}`.toLowerCase()

    return userEmail
}

function firstName() {
    return `${generateString(8)}User`
}

function lastName() {
    return `${generateString(8)}Cypress`
}

function day() {
    return Math.floor(Math.random() * (31 - 1 + 1) + 1)
}

function year() {
    return Math.floor(Math.random() * 39) + 60
}

function generatePostalCode(length, numberOnly = true) {
    if (numberOnly) {
        return Math.random().toString().substr(2, length)
    }

    return Math.random().toString(36).substr(2, length)
}

function phoneNumber(prefix = '003581', len = 11) {
    return `${prefix}${Math.random().toString().slice(2, len)}`
}

module.exports = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    day: day,
    year: year,
    generatePostalCode: generatePostalCode,
    phoneNumber: phoneNumber
}
