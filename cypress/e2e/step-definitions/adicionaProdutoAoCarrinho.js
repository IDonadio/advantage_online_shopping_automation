import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const converteParaDolar = (valor) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
};

Given ("que o usuário está na página de produtos", () => {
    cy.visit("https://advantageonlineshopping.com/")

     
})

When ("o usuário pesquisa por {string}", (produto) => {
    cy.get("input[name='mobile_search']")
    .should('be.visible')
    .type(produto+"{enter}")
    
})

And ("realiza o checkout informando a quantidade {int} do produto", (quantidade) => {
    cy.get('.imgProduct')
    .click()

    cy.get("input[name='quantity']")
    .type(quantidade)

    cy.get("button[name='save_to_cart']").click()

    cy.get("a[href='#/shoppingCart']").click()

    cy.get('#checkOutButton')
    .click()

})

Then ("o produto {string} com valor {float} e quantidade {int} deve estar listado na tela de pagamento", (produto, valor, quantidade) => {
    const total = converteParaDolar(valor*quantidade)

    cy.get('a > h3').eq(0).contains(produto)  
    cy.get('a > label').eq(0).contains("QTY: "+quantidade)  
    cy.get('.totalText')
    .contains("TOTAL")
    .contains(total)
  
})