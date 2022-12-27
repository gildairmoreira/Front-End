async function buscaEndereco()
{
    try
    {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            throw Error ('CEP não Existe!')
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch(erro){
        console.log(erro);
    }
}

let ceps = ['01001000','35835000']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))