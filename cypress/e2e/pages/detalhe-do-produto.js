export class DetalheDoProduto 
{
  inputQuantidade = "input[name='quantity']";
  btnAdicionaAoCarrinho = "button[name='save_to_cart']";
  linkCarrinho = "a[href='#/shoppingCart']";

  selecionaOpcoesParaCompra(quantidade)
  {
    cy.get(this.inputQuantidade).type(quantidade)
    cy.get(this.btnAdicionaAoCarrinho).click()
    cy.get(this.linkCarrinho).click()
  }
 
}