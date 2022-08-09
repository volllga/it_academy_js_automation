const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  'watchForFileChanges': false,
  'defaultCommandTimeout': 7000,
  'viewportHeight': 768,
  'viewportWidth': 1024
});
