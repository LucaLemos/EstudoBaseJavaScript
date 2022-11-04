const livros = require('./listaLivros')
const trocaLugar = require('./trocaLugar')

function encontraMenores(pivo, array) {
    let menores = 0;

    for(let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++;
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores);

    return array;
}

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    console.log(pivo)
    encontraMenores(pivo, array);
    let menorValores = 0;

    for (let i = 0; i < array.length; i++) {
        let atual = array[i];
        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, i, menorValores)
            menorValores++
        }
    }


    return array;
}

console.log(divideNoPivo(livros));