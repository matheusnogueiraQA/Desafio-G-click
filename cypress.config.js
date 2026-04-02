const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    allowCypressEnv: true

  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  videosFolder: 'docs/videos',
  screenshotsFolder: 'docs/screenshots'
});
