#language: pt

Funcionalidade: API de detalhes do produto

Contexto: 
  Dado que tenho a API para obter detalhes de um produto
  E eu faço uma requisição GET ao servidor para "/api/products/" passando um ID válido

Cenário: API retorna status de sucesso 
  Então o código de retorno da API deve ser 200

Cenário: Retorno tem cabeçalho http correto
  Então o cabeçalho do corpo de resposta deve ser "application/json"

Esquema do Cenário: Retorno contém ID do produto correto
  Então o corpo de resposta contém <productID>

Exemplos:
  | productID |
  |           |

Esquema do Cenário: Retorno contém dados do produto
  Então o corpo de resposta contém <productName>, <price> e <status>

Exemplos:
  | productName | price | status |
  |             |       |        |


