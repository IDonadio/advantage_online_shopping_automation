#language: pt

Funcionalidade: API para atualização de detalhes do produto

Esquema do Cenário: atualiza detalhes de um produto
  Quando eu faço uma requisição POST para "<url>" passando  id do usuário <user_id>, cor "<color>" e código do produto <product_id>
  Então o código de retorno da API deve ser 200
  E o retorno deve conter "<file>" e "<color>"

Exemplos:
  | url                                                                      |  user_id         |  color    |  product_id   |   file      |                                                                                                                                    
  | https://www.advantageonlineshopping.com/catalog/api/v1/product/image/    |  881263347       |  3683D1   |   32          |   fff.png   |   