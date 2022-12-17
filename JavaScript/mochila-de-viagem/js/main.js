const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    console.log(evento)
    criaElemento(evento.target.elements[ 'nome' ].value, evento.target.elements[ 'quantidade' ].value)
})

function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    console.log(numeroItem)
}