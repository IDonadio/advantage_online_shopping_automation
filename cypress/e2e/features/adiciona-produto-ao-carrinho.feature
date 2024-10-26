#language: pt

Funcionalidade: Adicionar produto ao carrinho

Contexto: Dado que o usuário está na página de produtos

Esquema do Cenário: Adicionar produto ao carrinho e validar na tela de pagamento
    Quando o usuário pesquisa por "<produto>"
    E realiza o checkout informando a quantidade <quantidade> do produto
    Então o produto "<produto>" com valor <valor> e quantidade <quantidade> deve estar listado na tela de pagamento

    Exemplos:
      | produto               | valor       | quantidade   |
      | HP PRO TABLET 608 G1  | 479.00      |      2       |