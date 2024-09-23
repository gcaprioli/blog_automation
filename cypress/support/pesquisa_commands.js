//Optei por criar uma pasta de comandos individualizada. Assim, se fosse ter comandos para outros tipos de teste além da pesquisa, manteria separado dos demais para facilitar a manutenção
Cypress.Commands.add('realizarPesquisa', (termoPesquisa) => {
    cy.get('.ast-search-icon').click()
    cy.get('.search-field').type(`${termoPesquisa}{enter}`)
})

Cypress.Commands.add('checarTopoPesquisa', (termoPesquisa) => {
    cy.get('.page-title.ast-archive-title')
        .should('contain.text', `Resultados encontrados para: ${termoPesquisa}`)
})

Cypress.Commands.add('checarResultadosPesquisa', (existeResultados, termoPesquisa) => {
    if (existeResultados) {
        cy.get('#main.site-main').should('exist')
        cy.get('#main.site-main article')
            .should('have.length.at.least', 1) // Verifica se há pelo menos um <article>
            .then(($articles) => {
                // Verifica se algum dos artigos contém a palavra armazenada na variável
                const hasTermo = [...$articles].some(
                    article => article.innerText.includes(termoPesquisa))
                // Assert para verificar se encontrou a palavra
                expect(hasTermo).to.be.true
            })
    } else {
        //Não haverá resultados para mostrar, mas a frase pedindo para rever a pesquisa
        cy.get('#main.site-main').should('exist')
        cy.get('#main.site-main section.no-results.not-found')
            .should('exist')
            .and('contain.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
    }
})