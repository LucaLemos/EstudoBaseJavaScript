const livros = require('./listaLivros.js');
const menorValor = require('./menorValor');

livros.forEach((_, i) => {
    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    let livroMenor = livros[menor];

    livros[i] = livroMenor;
    livros[menor] = livroAtual;
})

console.log(livros);
