export class Home {

  abrirSite()
  {
    cy.visit("https://advantageonlineshopping.com/");
  }

  buscaProduto(produto)
  {
      cy.get("input[name='mobile_search']")
      .should('be.visible')
      .type(produto+"{enter}");
  }
}