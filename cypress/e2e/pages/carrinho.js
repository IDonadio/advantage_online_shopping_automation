export class Carrinho {
  checkout(){
    cy.get('#checkOutButton').click();
  }
}