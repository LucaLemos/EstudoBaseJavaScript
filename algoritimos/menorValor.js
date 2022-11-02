const livros = require('./listaLivros.js');

function menorValor(arrProdutos, posiInicial) {
    let menorPreco = posiInicial;

    for (let i = posiInicial; i < arrProdutos.length; i++) {
        if (arrProdutos[i].preco < arrProdutos[menorPreco].preco) {
            menorPreco = i;
        }
    }

    return menorPreco;
}

module.exports = menorValor;

let barato = menorValor(livros, 1)

console.log(`O livro mais barato é ${livros[barato].nome} custando ${livros[barato].preco}`)

