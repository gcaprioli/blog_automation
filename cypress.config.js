const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Durante a execução dos testes, percebi que há um fetch no Analytics que atrapalha os testes, então optei por bloquear
    blockHosts: [
      'www.google-analytics.com',   // Bloqueia o Google Analytics
      'analytics.google.com',       // Bloqueia Google Analytics coleta
      '*.google-analytics.com',     // Bloqueia o Google Analytics
    ],

    setupNodeEvents(on, config) {
      // // Interceptar e bloquear a requisição POST ao Google Analytics
      // on('before:browser:launch', (browser = {}, launchOptions) => {
      //   // Bloqueia a requisição para o Google Analytics em todos os testes
      //   cy.intercept('POST', '**/g/collect**', {
      //     statusCode: 204,
      //     body: {}
      //   }).as('blockAnalytics');
      // });
      
      // return config;
    },
  },
});