const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/api/**/*.cy.js"
    ],
    allowCypressEnv: true,
    baseUrl: 'https://automationexercise.com',

  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  videosFolder: 'docs/videos',
  screenshotsFolder: 'docs/screenshots'
});
