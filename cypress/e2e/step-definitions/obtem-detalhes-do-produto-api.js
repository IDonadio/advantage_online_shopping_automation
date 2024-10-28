import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

let response = '';

When("eu faço uma requisição GET para {string} passando um id {int}", (url, id) => {
    const novoId = parseInt(id);
    const urlCompleta = url + novoId;
    cy.request("GET", urlCompleta)
    .then((res) => {
        this.response = res; 
    });
  })

Then ("o código de retorno da API deve ser {int}", (statusCode) => {
    expect(this.response.status).to.eq(statusCode);
})

And ("o cabeçalho do corpo de resposta deve ser {string}", (contentType) => {
    expect(this.response.headers['content-type']).to.include(contentType);
})

And ("o corpo de resposta deve conter {int}, {string}, {float}, {string} e {string}", (id, name, price, status, description) => {
    expect(this.response.body).to.have.property('productId', id);
    expect(this.response.body).to.have.property('productName', name);
    expect(this.response.body).to.have.property('price', price);
    expect(this.response.body).to.have.property('productStatus', status);
    expect(this.response.body).to.have.property('description', description);
})