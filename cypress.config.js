const { defineConfig } = require('cypress')
const setConfig = require('./cypress/plugins/index')

module.exports = defineConfig({
    env: {
        password: 'Testtest1!',
        device: 'mobile'
    },
    retries: {
        runMode: 1
    },
    defaultCommandTimeout: 15000,
    numTestsKeptInMemory: 10,
    chromeWebSecurity: false,
    video: false,
    videoUploadOnPasses: false,
    e2e: {
        setupNodeEvents: setConfig,
        baseUrl: 'https://automationexercise.com'
    }
})
