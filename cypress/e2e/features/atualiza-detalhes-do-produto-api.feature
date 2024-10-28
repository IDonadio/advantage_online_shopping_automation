#language: pt

Funcionalidade: API para atualização de detalhes do produto

Esquema do Cenário: atualiza detalhes de um produto
  Dado que eu sou um usuário autenticado
  Quando eu faço uma requisição POST informando cor "<color>" e código do produto <product_id> na url e fornecendo imagem "<file>"
  Então o código de retorno da API deve ser 200
  E o retorno deve conter "<color>"

Exemplos:
  |  color    |  product_id   | file                 |                                                                                                                                  
  |  3683D1   |   46          | O-cheiro-do-ralo.jpg |