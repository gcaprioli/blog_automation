# Projeto: Blog_Pesquisa

## Visão geral
Este projeto automatiza alguns testes de interface de usuário utilizando Cypress. A automação foca em alguns cenários da funcionalidade de pesquisa do blog.
Deixei alguns comentários ao longo do código para explicar a linha de raciocínio que estava seguindo no momento.

## Resumo do plano de teste
### Cenário 1: Verificar a existência do campo de pesquisa.
Verifica se o ícone do campo de pesquisa está presente na página.

### Cenário 2: Pesquisar um termo simples e válido.
Realiza uma pesquisa utilizando apenas uma palavra e verifica o comportamento quando este termo retorna resultados. O termo usado no exemplo foi "banco".

### Cenário 3: Pesquisar um termo simples e inválido.
Realiza uma pesquisa utilizando apenas uma palavra e verifica o comportamento quando não há resultados para o termo. O termo usado no exemplo foi "sopro".

### Cenário 4: Pesquisar em branco.
Realiza uma pesquisa sem fornecer nenhum termo. Verifica que a pesquisa retorna os resultados mais recentes.

### Cenário 5: Pesquisar termo composto.
Realiza uma pesquisa considerando um termo composto, que inclui duas palavras e o caracter especial {espaço}. O termo composto usado no exemplo foi "receber benefícios".

## Instalação e execução
Eu já tenho o Cypress instalado na máquina há alguns anos, mas quando instalei, utilizei as orientações do site oficial: https://docs.cypress.io/guides/getting-started/installing-cypress

Após a instalação, para executar o projeto localmente, executar o seguinte comando na pasta raiz do projeto para o Cypress iniciar os testes na plataforma:
> npx cypress open

## Funcionamento
Link do vídeo-demonstração: https://www.loom.com/share/147a78eebd174c8c99f565daabac8dc4?sid=9ce2b2c3-c16a-429a-b654-a9c8372ab0bb