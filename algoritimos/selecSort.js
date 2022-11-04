const livros = require('./listaLivros.js');
const menorValor = require('./menorValor');
const trocaLugar = require('./trocaLugar');

for (let i = 0; i < livros.length; i++) {
    let menor = menorValor(livros, i);
    trocaLugar(livros, i, menor);
}

console.log(livros);