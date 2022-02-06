// Elementos
var produtos = document.getElementsByTagName("data-produtos");
console.log(produtos);

function abrirProduto(produto) {
    window.navigator("/pages/produto-detalhe.html?produto=" + produto);
}