import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from './validacao.js';

const path = process.argv;

async function imprimeLista(valida, resultados, identificador = '') {

    if (valida) {
        console.log(
            chalk.blue('lista validada: '), 
            chalk.black.bgGreen(identificador),
            await listaValidada(resultados));
    } else {
        console.log(
            chalk.red('lista de links: '), 
            chalk.black.bgGreen(identificador),
            resultados);
    }

}

async function processaTexto(path) {
    const argumento = path[2];
    const valida = path[3] === '--valida';

    try {
        fs.lstatSync(argumento)
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log('Arquivo ou diretorio não existe');
            return;
        }
    }
    
    if (fs.lstatSync(argumento).isFile()) {
        const retorno = await pegaArquivo(argumento);
        imprimeLista(valida, retorno);
    }else {
        const arquivo = await fs.promises.readdir(argumento);
        arquivo.forEach(async (arquivoNome) => {
            const links = await pegaArquivo(`${argumento}/${arquivoNome}`);
            imprimeLista(valida, links, arquivoNome)
        })
    }

}

processaTexto(path);