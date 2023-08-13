const { defineConfig } = require('cypress')

module.exports = defineConfig({
    env: {
        password: 'Testtest1!'
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
        baseUrl: 'https://automationexercise.com'
    }
})
