const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 25000,
    "specPattern": "**/*.{feature,features}",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },  
  },
});
