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

