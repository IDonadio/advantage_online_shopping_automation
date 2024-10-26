import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { Home } from '../pages/home'
import { ListagemDeProdutos } from '../pages/listagem-de-produtos'
import { DetalheDoProduto } from '../pages/detalhe-do-produto'
import { OrdemDeServico } from '../pages/ordem-de-servico'
import { Carrinho } from '../pages/carrinho'

const home = new Home();
const listaDeProdutos = new ListagemDeProdutos();
const detalheDoProduto = new DetalheDoProduto();
const ordemDeSerivco = new OrdemDeServico();
const carrinho = new Carrinho();


Given ("que o usuário está na página de produtos", () => {
    home.abrirSite();    
})

When ("o usuário pesquisa por {string}", (produto) => {
    home.buscaProduto(produto);
    listaDeProdutos.selecionaProduto();    
})

And ("realiza o checkout informando a quantidade {int} do produto", (quantidade) => {
    detalheDoProduto.selecionaOpcoesParaCompra(quantidade);
    carrinho.checkout();
})

Then ("o produto {string} com valor {float} e quantidade {int} deve estar listado na tela de pagamento", (produto, valor, quantidade) => {
    ordemDeSerivco.verificaDadosDoProduto(produto, valor, quantidade);  
})