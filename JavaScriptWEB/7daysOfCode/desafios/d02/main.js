let nome = window.prompt('Qual seu nome')
let idade = window.prompt('Quantos anos você tem?')
let linguagem = window.prompt('Qual linguagem de programação você está estudando?')

document.write(`Olá ${nome}, Você tem ${idade} anos de idade e já está aprendendo ${linguagem}`)

let estudo = window.prompt(`Você gosta de Estudar JavaScript? Responda com 1 para SIM OU 2 PARA NÃO`)

if (estudo == 1 || estudo == 2){
    if (estudo == 1){
        document.write(`Muito bom! Continue estudando e você terá muito sucesso.`)
    }
    if (estudo == 2){
        document.write(`Ahh que pena... Já tentou aprender outras linguagens?`)
    }
}  else{
    document.write(`Opção invalida`)
}

