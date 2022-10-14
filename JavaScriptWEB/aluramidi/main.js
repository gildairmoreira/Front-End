function tocaSom(idElementoAudio) { 
    document.querySelector(idElementoAudio).play();
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
    tecla.onkeydown = function() {
        tecla.classList.add('ativa')
    }
}
