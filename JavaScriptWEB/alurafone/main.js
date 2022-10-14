const listaTeclas = document.querySelectorAll("input[type=button]")
const tel = document.querySelector("input[type='tel']")

function digitar(valorTecla){
  tel.value+=valorTecla;
}

for(let i = 0; i < listaTeclas.length; i++){
  listaTeclas[i].onclick = () => {
    digitar(listaTeclas[i].value)
  }
}