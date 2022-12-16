function tocaSom(seletorAudio) { 
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado')
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla') //pega todas classes que tem tecla no nome

for (let contador = 0; contador < listaDeTeclas.length;contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //Template string
    const idAudio= `#som_${instrumento}`//faz o 'toca som' ser variavel passa pelos sons da classList
    
    tecla.onclick = function(){//função 'anonima' para não dar o erro de ativar a função imediatamente
        tocaSom(idAudio);
    
    }
    tecla.onkeydown = function(evento) { //para navegar pelo teclado sem bug
        if (evento.code == 'Space' || evento.code == 'Enter') {
        tecla.classList.add('ativa')
    }

    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
