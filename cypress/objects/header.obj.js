const area = '#header'
const shopMenu = `${area} .shop-menu`
module.exports = {
    logoImage : `${area} .logo img`,
    logoLink : `${area} .logo a`,
    homeButton: `${shopMenu} > .nav > :nth-child(1) > a`,
    productsButton: `${shopMenu} > .nav > :nth-child(2) > a`,
    cartButton: `${shopMenu} > .nav > :nth-child(3) > a`,
    authButton: `${shopMenu} > .nav > :nth-child(4) > a`,
    navigationLinks: `${shopMenu} .nav a`,
    testCasesButton: `${shopMenu} > .nav > :nth-child(5) > a`,
    apiTestingButton: `${shopMenu} > .nav > :nth-child(6) > a`,
    videoTutorialsButton: `${shopMenu} > .nav > :nth-child(7) > a`,
    contactButton: `${shopMenu} > .nav > :nth-child(8) > a`,
    userNotification: `${shopMenu} > .nav > :nth-child(10) > a`,
}