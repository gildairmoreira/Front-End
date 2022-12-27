async function buscaEndereco(cep)
{
    try
    {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        
        if(consultaCEPConvertida.erro){
            throw Error ('CEP não Existe!')
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        bairro.value = consultaCEPConvertida.bairro;
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch(erro){
        console.log(erro);
    }
}   

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))


