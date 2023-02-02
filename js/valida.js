function verificarValor(chute){
    const numero =+ chute

    if(chuteInvalido(numero)){
      elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if(numeroMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `<div class="container"><h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <br>
        <h2><a href="index.html">Reiniciar</a></h2></div>`
    }
    else if(numero < numeroSecreto){
        elementoChute.innerHTML += ` <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
    else{
        elementoChute.innerHTML += ` <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
    
}
function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorMenor(numero){
    return numero > maiorValor || numero < menorValor
}