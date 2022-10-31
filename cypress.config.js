const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hn9j7d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
