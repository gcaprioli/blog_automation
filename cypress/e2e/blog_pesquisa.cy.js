//Rever escritas de "describe" e "it"
describe('Validação de busca no blog', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://blogdoagi.com.br')
  })

  
  it('Tem campo de pesquisa', () => {
    cy.get('.ast-search-icon').should('exist')  
  })

  it('Pesquisa termo válido', () => {
    const termoPesquisa = "banco"
    cy.realizarPesquisa(termoPesquisa)
    cy.checarTopoPesquisa(termoPesquisa)
    cy.checarResultadosPesquisa(true, termoPesquisa)     
  })

  it('Pesquisa termo inválido', () => {
    const termoPesquisa = "sopro"
    cy.realizarPesquisa(termoPesquisa)
    cy.checarTopoPesquisa(termoPesquisa)
    cy.checarResultadosPesquisa(false, termoPesquisa)
  })

  //Percebi que quando não digitamos nada e damos {enter}, a pesquisa ainda assim funciona, aparentemente trazendo os resultados ordenados dos mais recentes aos mais antigos
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