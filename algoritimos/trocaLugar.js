function trocaLugar(lista, item1, item2) {
    let itemAnalizado = lista[item1];
    let itemTrocado = lista[item2];

    lista[item1] = itemTrocado;
    lista[item2] = itemAnalizado;
}

module.exports = trocaLugar;