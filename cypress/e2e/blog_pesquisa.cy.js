//Rever escritas de "describe" e "it"
//Vou precisar ajustar o trecho de código da pesquisa, que se repete, dentro de support, como se fosse um comando
//Preciso dar uma melhorada na parte do AnalyticsCollect, porque fica recolhendo dentro do teste
const termoPesquisaValido = "banco"
const termoPesquisaInvalido = "sopro"

describe('Validação de busca no blog', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://blogdoagi.com.br')
    //cy.visit('https://www.pudim.com.br/')
  })

  
  it('Tem campo de pesquisa', () => {
    cy.get('.ast-search-icon').should('exist')  
  })

  it('Pesquisa termo válido', () => {
    const termoPesquisa = termoPesquisaValido
    cy.realizarPesquisa(termoPesquisa)
          
    cy.get('#main.site-main').should('exist') // rever para não fazer a linha debaixo se não existir
    cy.get('#main.site-main article')
      .should('have.length.at.least', 1) // Verifica se há pelo menos um <article>
      .then(($articles) => {
        // Verifica se algum dos artigos contém a palavra armazenada na variável
        const hasTermo = [...$articles].some(article => article.innerText.includes(termoPesquisa))
        // Assertiva para verificar se encontrou a palavra
        expect(hasTermo).to.be.true
  
      })
  })

  it('Pesquisa termo inválido', () => {
    const termoPesquisa = termoPesquisaInvalido
    cy.realizarPesquisa(termoPesquisa)
    
    cy.get('#main.site-main').should('exist')
    cy.get('#main.site-main section.no-results.not-found')
      .should('exist')
      .and('contain.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')

  })

  //Percebo que quando não digitamos nada a damos {enter}, a pesquisa ainda assim funciona, aparentemente trazendo os resultados ordenados dos mais recentes aos mais antigos
  it('Pesquisa em branco', () => {
    const termoPesquisa = '' 
    cy.realizarPesquisa(termoPesquisa)

    /*cy.get('.ast-search-icon').click()
    cy.get('.search-field').type('{enter}')
    cy.get('.page-title.ast-archive-title')
      .should('contain.text', 'Resultados encontrados para: ')*/
    cy.get('#main.site-main').should('exist')
    cy.get('#main.site-main article').should('have.length.at.least', 1)

  })

})