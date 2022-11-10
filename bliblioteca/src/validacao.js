import chalk from "chalk";

function extraiLinks (arrLinks) {
    return arrLinks.map( (objetoLinks) => Object.values(objetoLinks).join() )
}

async function checaStatus (listaURL) {
    const arrStatus = await Promise
    .all(
        listaURL.map(async (url) => {
            try {
                const response = await fetch(url)
                return response.status;
            }catch (erro) {
                return manejaErros(erro);
            }
        })
    )
    return arrStatus
}

function manejaErros(erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado'
    } else {
        return 'algo deu errado'
    }
}

export default async function listaValidada (listaDeLinks) {
    const link = extraiLinks(listaDeLinks);
    const status = await checaStatus(link);
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }));
}

