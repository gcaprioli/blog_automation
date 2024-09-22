const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Durante a execução dos testes, percebi que há um fetch no Analytics que atrapalha os testes, então optei por bloquear
    /*blockHosts: [
      'www.google-analytics.com',   // Bloqueia o Google Analytics
      'analytics.google.com',       // Bloqueia Google Analytics coleta
      '*.google-analytics.com',     // Bloqueia o Google Analytics
    ],*/

    setupNodeEvents(on, config) {
      
    },
  },
});