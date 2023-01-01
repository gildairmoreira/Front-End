async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida;
}

async function criaVideo(titulo,descricao,url,imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers:{
            "Cotent-type": "application/json"
        },
        body: JSON.stringfy({
            titulo: titulo,
            descricao: descricao,
            url: url,
            imagem:imagem
        })
    })
}

export const conectaApi = {
    listaVideos
}