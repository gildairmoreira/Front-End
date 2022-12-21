function verificaSeOChuteEValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        console.log('valor invalido');
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`Valor Inválido: o Número secreto precisa estar entre ${menorValor} é ${maiorValor}`);
    }

}

function chuteForInvalido(numero)
{
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}