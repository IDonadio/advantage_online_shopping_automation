import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let response = '';

When("eu faço uma requisição para {string} passando um id {int}", (url, id) => {
    const novoId = parseInt(id);
    const urlCompleta = url + novoId;
    cy.request("GET", urlCompleta)
    .then((res) => {
        response = res; 
    });
  })

Then ("o código de retorno da API deve ser {int}", (statusCode) => {
    expect(response.status).to.eq(statusCode);
})

And ("o cabeçalho do corpo de resposta deve ser {string}", (contentType) => {
    expect(response.headers['content-type']).to.include(contentType);
})

And ("o corpo de resposta deve conter {int}, {string}, {float}, {string} e {string}", (id, name, price, status, description) => {
    expect(response.body).to.have.property('productId', id);
    expect(response.body).to.have.property('productName', name);
    expect(response.body).to.have.property('price', price);
    expect(response.body).to.have.property('productStatus', status);
    expect(response.body).to.have.property('description', description);
})