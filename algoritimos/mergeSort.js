const livros = require('./listaLivros');

function mergeSort(array) {
    if(array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2);
    }

    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const rasultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtual1 = parte1[posicaoAtualParte1];
        let produtoAtual2 = parte2[posicaoAtualParte2];

        if (produtoAtual1.preco < produtoAtual2.preco) {
            rasultado.push(produtoAtual1)
            posicaoAtualParte1++;
        } else {
            rasultado.push(produtoAtual2)
            posicaoAtualParte2++;
        }
    }

    return rasultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2));
}

console.log(mergeSort(livros));