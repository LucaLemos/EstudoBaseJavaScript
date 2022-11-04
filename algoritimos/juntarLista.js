const {edGalho, edFOlha} = require('./arrays');

function fundirLista(lista1, lista2) {
    let listaFinal = [];
    let posAtual1 = 0;
    let posAtual2 = 0;
    let atual = 0;

    while (posAtual1 < lista1.length && posAtual2 < lista2.length) {
        let produtoAtual1 = lista1[posAtual1];
        let produtoAtual2 = lista2[posAtual2];

        if (produtoAtual1.preco < produtoAtual2.preco) {
            listaFinal[atual] = produtoAtual1;
            posAtual1++;  
        }else {
            listaFinal[atual] = produtoAtual2;
            posAtual2++
        }
        atual++;
    }

    while (posAtual1 < lista1.length) {
        listaFinal[atual] = lista1[posAtual1];
        posAtual1++;
        atual++
    }

    while (posAtual2 < lista2.length) {
        listaFinal[atual] = lista2[posAtual2];
        posAtual2++;
        atual++
    }

    return listaFinal;
}

console.log(fundirLista(edGalho, edFOlha));