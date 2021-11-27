//* 1 - Declarar um array de escopo global de erros var erros = []
var erros = []

 //* 2 - Gerar um numero aleatório entre 1 e 60 (criar uma constante com o nome de VALOR_SORTEADO) Math.random()*60+1
const VALOR_SORTEADO = parseInt(Math.random()*60+1)

 //* 3 - Declarar o limite de chances (uma constante CHANCES = 6)
const CHANCES = 6

//* 4 - Criar uma funcao chamada adivinharNumero()
function adivinharNumero() {
    let numero = document.querySelector("#numero").value

    // * 4.1 - Verificar se o numero é < que 1 ou se numero > que 60, caso for mostrar "Informe um número válido"
    if(numero < 1 || numero > 60) {
        alert("Informe um número válido entre 1 e 60")
        limparCampoNumero()
        return;
    }

    /* 
    * 4.2 - Verificar se o número digitado pelo usuario (a aposta) é igual ao VALOR_SORTEADO, se for mostrar "Parabéns! Você acertou!"
    * 4.2.1 - Ocultar o botao adivinhar e mostrar um botão chamado Jogar Novamente (criar esse botão)
    * 4.2.2 - Mostrar no saidaDica "Parabéns! O número sorteado é: VALOR_SORTEADO"
    * 4.2.3 - Se o usuario apertar o botao jogar novamente a acao sera window.reload()
    */
    let btnAdivinhar = document.querySelector("#adivinhar")
    let btnJogarNovamente = document.querySelector("#jogar")
    let saidaDica = document.querySelector("#saidaDica")
    if(numero == VALOR_SORTEADO) {
        document.querySelector("#numero").style = "display: none"
        btnAdivinhar.style = "display: none"
        btnJogarNovamente.style = "display: block !important"     
        saidaDica.innerHTML = `<h4 class="alert alert-success">Parabéns! O número sorteado é: ${VALOR_SORTEADO}</h4>`
        alert("Parabéns! Você acertou!")
    } else {
        /* 4.3 - Caso o valor digitado for diferente do VALOR_SORTEADO
        * 4.3.1 -  Verificar Se o valor digitado ja existe no array de erros, se ja existir mostrar 
        * "Você já apostou o número X. Tente outro!!!"
        */
        if(erros.indexOf(numero) !== -1) {
            alert(`Você já apostou o número ${numero}. Tente outro!`)
        } else {
            /* 4.4 - Caso o valor nao exista no array de erros, adicionar o valor ao array erros (usar o push)
            * 4.4.1 - criar uma variavel let numErros para guardar a quantidade de erros erros.length
            * 4.4.2 - criar uma variavel let numChances para guardar o CHANCES - numErros
            * 4.4.3 - mostrar na tela no id=saidaErro o numero de erros e todo o conteudo do array erros.join()
            * 4.4.4 - mostrar na tela no id=saidaChance o numero de chances que restam
            */
            erros.push(numero)
            let numErros = erros.length
            let numChances = CHANCES - numErros
            document.querySelector("#saidaErro h4").innerHTML = `${numErros} (${erros.join(', ')})`
            document.querySelector("#saidaChance h4").innerHTML = `${numChances} de ${CHANCES}`
            /* 4.5 -  Verificar se o numero de chances (numChances) for igual a zero
            * 4.5.1 - mostrar na tela "Suas chances acabaram!"
            * 4.5.2 - Ocultar o botao adivinhar e mostrar um botão chamado Jogar Novamente (criar esse botão)
            * 4.5.3 - Mostrar no saidaDica "GAME OVER! O número sorteado é VALOR_SORTEADO"
            */ 
           if(numChances == 0) {            
               btnAdivinhar.style = "display: none"
               btnJogarNovamente.style = "display: block !important" 
               saidaDica.innerHTML = `<h4 class="alert alert-danger">GAME OVER! O número sorteado é: ${VALOR_SORTEADO}</h4>`
               alert("Suas chances acabaram!")
           } else {
                /* 4.6 - Caso o numero de chances (numChances) for diferente de zero (MONTAR AS DICAS)
                * 4.6.1 - Verificar se o numero digitado é menor que o sorteado, caso sim armazenar um texto
                * em uma varivavel chamado let dica="menor", caso contrario armazenar o dica="maior" 
                * let dica = numero.value < VALOR_SORTEADO ? "menor" : "maior"
                * 4.6.2 - Mostrar na tela no campo saidaDica o Texto " Tente um número ${dica} que o VALOR_SORTEADO"
                */
                let dica = (numero < VALOR_SORTEADO) ? "maior" : "menor"
                saidaDica.getElementsByTagName('h4')[0].innerHTML = `Tente um número ${dica} que o ${numero}`
           }
        }
    }

    /* 4.7 -  Sempre que o usuario adivinhar limpar o campo e apontar o foco para ele */
    limparCampoNumero()
}

function limparCampoNumero() {
    numero.value = ''
    numero.focus()
}

jogar.onclick = () => window.location.reload() //addEventListener("click", recarregarJogo)
adivinhar.addEventListener("click", adivinharNumero)
limparCampoNumero()

setInterval(() => {
    animateCSS('#adivinhar', 'flipInX'); //botao
    animateCSS('.fa-heartbeat', 'swing'); //icone dos erros
    animateCSS('.fa-exclamation-circle', 'bounce'); //icone das chances
    animateCSS('.fa-concierge-bell', 'wobble'); //icone das tentativas
}, 5000)