import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

let postResponse;
let authToken;

Given ('que eu sou um usuário autenticado', () => {
  cy.request({
    method: 'POST',
    url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      'email': 'lucianacallefe95@gmail.com',
      'loginPassword': '123F31j04d4*',
      'loginUser': 'lu.calledon'
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    authToken = response.body.statusMessage.token; 
  });
})

When('eu faço uma requisição POST informando cor {string} e código do produto {int} na url e fornecendo imagem {string}',
  (color, product_id, file) => {
    const formData = new FormData();
    let id = parseInt(product_id);
    const urlCompleta = `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/881263347/luciana/${color}?product_id=${id}`;

    cy.fixture(file, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileBlob) => {
        formData.append('file', fileBlob, file);

    cy.request({
      method: 'POST',
      url: urlCompleta,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authToken}`,
      },
      body: formData,
      }).then((response) => {
        this.postResponse = response; 
      });
  });
})

Then('o código de retorno da API deve ser {int}', (statusCode) => {
  expect(this.postResponse.status).to.eq(statusCode);
})

And('o retorno deve conter "{string}"', (color) => {
  cy.wrap(this.postResponse).its('body').then((body) => {
    expect(body.imageColor).to.contain(color); 
    expect(body.imageId).to.contain('custom_image_luciana');
  });
})


