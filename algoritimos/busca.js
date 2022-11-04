const livros = require('./listaLivros');

function busca(array, de, ate, alvo) {
    let meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    console.log('meio: ', meio)
    console.log(atual)

    if (de > ate) {
        return -1;
    }

    if (alvo === atual.preco) {
        return meio;
    }

    if (alvo < atual.preco) {
        return busca(array, de, meio-1, alvo);
    }

    if (alvo > atual.preco) {
        return busca(array, meio, array.length, alvo);
    }
}

console.log(busca(livros, 0, livros.length, 15))

