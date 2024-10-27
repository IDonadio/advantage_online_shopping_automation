#language: pt

Funcionalidade: API para obter detalhes do produto

Esquema do Cenário: obtém e valida detalhes de um produto
  Quando eu faço uma requisição GET para "<url>" passando um id <id>
  Então o código de retorno da API deve ser 200
  E o cabeçalho do corpo de resposta deve ser "application/json"
  E o corpo de resposta deve conter <id>, "<productName>", <price>, "<status>" e "<description>"

Exemplos:
  | url                                                                 |  id       |  productName                     | price    | status   | description                                                                                                                                      |
  | https://www.advantageonlineshopping.com/catalog/api/v1/products/    |  29       |  HP USB 3 Button Optical Mouse   |   9.99   |  Active  |  Smooth and Accurate - The HP USB 3-Button Optical Mouse is the affordable desktop optical mouse solution that combines functionality with style |





