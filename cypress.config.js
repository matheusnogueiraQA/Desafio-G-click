const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',

    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/api/**/*.cy.js"
    ],

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots'
});
