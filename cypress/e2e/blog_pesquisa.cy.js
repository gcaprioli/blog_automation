describe('Validação de busca no blog', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://blogdoagi.com.br')
  })
  
  it('Verifica campo de pesquisa', () => {
    cy.get('.ast-search-icon').should('exist')  
  })

  it('Pesquisa termo simples e válido', () => {
    const termoPesquisa = "banco"
    cy.realizarPesquisa(termoPesquisa)
    cy.checarTopoPesquisa(termoPesquisa)
    cy.checarResultadosPesquisa(true, termoPesquisa)     
  })

  it('Pesquisa termo simples e inválido', () => {
    const termoPesquisa = "sopro"
    cy.realizarPesquisa(termoPesquisa)
    cy.checarTopoPesquisa(termoPesquisa)
    cy.checarResultadosPesquisa(false, termoPesquisa)
  })

  //Percebi que quando abrimos o campo de pesquisa e, sem digitar nada, apertamos {enter}, a pesquisa ainda assim funciona, aparentemente trazendo os resultados ordenados dos mais recentes aos mais antigos
  it('Pesquisa em branco', () => {
    const termoPesquisa = "" 
    cy.realizarPesquisa(termoPesquisa)
    cy.checarTopoPesquisa(termoPesquisa)
    cy.checarResultadosPesquisa(true, termoPesquisa)
  })

  //Pesquisa com mais de uma palavra
  it('Pesquisa com termo composto', () => {
    const termoPesquisa = "receber benefício" 
    cy.realizarPesquisa(termoPesquisa)
    cy.checarTopoPesquisa(termoPesquisa)
    cy.checarResultadosPesquisa(true, termoPesquisa)
  })
})