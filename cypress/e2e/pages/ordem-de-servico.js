export class OrdemDeServico
{
  converteParaDolar = (valor) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
  };

  
  verificaDadosDoProduto(produto, valor, quantidade)
  {
    const total = this.converteParaDolar(valor*quantidade)

    cy.get('a > h3').eq(0).contains(produto)  
    cy.get('a > label').eq(0).contains("QTY: "+quantidade)  
    cy.get('.totalText')
    .contains("TOTAL")
    .contains(total)
  }
}