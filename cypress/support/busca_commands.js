Cypress.Commands.add('realizarPesquisa', (termoPesquisa) => {
    cy.get('.ast-search-icon').click()


    cy.get('.search-field').type(`${termoPesquisa}{enter}`)
    cy.get('.page-title.ast-archive-title')
        .should('contain.text', `Resultados encontrados para: ${termoPesquisa}`)
})

Cypress.Commands.add('realizarPesquisa', (termoPesquisa) => {
    cy.get('.ast-search-icon').click()


    cy.get('.search-field').type(`${termoPesquisa}{enter}`)
    cy.get('.page-title.ast-archive-title')
        .should('contain.text', `Resultados encontrados para: ${termoPesquisa}`)
})