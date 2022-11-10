import fs from 'fs';
import chalk from 'chalk';


function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];0
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));

    return resultados.length !== 0 ? resultados : 'Não há links';
}

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'arquivo não existe'));
}

async function pegaArquivo(path) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(path, encoding)

        return extraiLinks(texto);
    } catch (erro) {
        tratarErro(erro);
    }
}

/*
function pegaArquivo(path) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(path, encoding)
        .then((texto) => console.log(chalk.blue(texto)))
        .catch(tratarErro)
}
*/

export default pegaArquivo;