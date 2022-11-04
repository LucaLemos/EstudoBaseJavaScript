const livros = require('./listaLivros');
const trocaLugar = require('./trocaLugar')

function insertionSort(lista) {
    for (let i = 0; i < lista.length; i++) {
        let item = i;
        while (item > 0 && lista[item].preco < lista[item - 1].preco) {
            trocaLugar(lista, item, item - 1);
            item--;
        }
    }
}

insertionSort(livros);
console.log(livros)