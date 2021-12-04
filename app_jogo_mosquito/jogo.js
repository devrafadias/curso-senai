//Declara variavel global com nome "altura" e inicializa com valor 0
var altura = 0
//Declara variavel global com nome "largura" e inicializa com valor 0
var largura = 0
//Declara variavel global com nome "vidas" e inicializa com valor 1
var vidas = 1
//Declara variavel global com nome "tempo" e inicializa com valor 15
var tempo = 15
//Declara variavel global com nome "criaMosquitoTempo" e inicializa com valor 1500
var criaMosquitoTempo = 1500
//Declara variavel global com nome "nivel" e inicializa com a query URL da página
var nivel = window.location.search
//Substitui o ponto de interrogação (?) por uma string vazia
nivel = nivel.replace('?', '')
//Se o valor da variavel global nivel for igual a normal entra na condição
if(nivel === 'normal') {
	//Atribui o valor 1500 a variavel global criaMosquitoTempo
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//Atribui o valor 1000 a variavel global criaMosquitoTempo
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	//Atribui o valor 750 a variavel global criaMosquitoTempo
	criaMosquitoTempo = 750
}
//Cria função ajustaTamanhoPalcoJogo
function ajustaTamanhoPalcoJogo() {
	//Atribui a variavel global 'altura' a altura da pagina do jogo
	altura = window.innerHeight
	//Atribui a variavel global 'largura' a largura da pagina do jogo
	largura = window.innerWidth
    //Exibe no console os valores das variaveis globais largura e altura
	console.log(largura, altura)
}
//Executa a função ajustaTamanhoPalcoJogo
ajustaTamanhoPalcoJogo()

//Cria a variavel global cronometro que terá seu valor atualizado de 1 em 1 segundos (1000ms)
var cronometro = setInterval(function() {
	//Subtrai em 1 o valor da variavel global tempo
	tempo -= 1
	//Verifica se a o valor da variavel tempo é menor que 0
	if(tempo < 0) {
		//chama função para limpar valor da variavel cronometro
		clearInterval(cronometro)
		//chama função para limpar valor da variavel criaMosca
		clearInterval(criaMosca)
		//redireciona para a pagina vitoria.html
		window.location.href = 'vitoria.html'
	} else {
		//atribuir o valor da variavel tempo para o corpo do elemnto html que tem o ID 'cronometro'
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

//Cria função posicaoRandomica
function posicaoRandomica() {

	//Verifica se existe algum elemento HTML com ID mosquito
	if(document.getElementById('mosquito')) {
		//Remove o elemento HTML de ID mosquito 
		document.getElementById('mosquito').remove()

		//Verifica se a variavel vidas é maior que 3
		if(vidas > 3) {
			//Se valor da variavel vidas for maior que 3, redireciona para a pagina fim_de_jogo.html 
			window.location.href = 'fim_de_jogo.html'
		} else {
			//Se valor da variavel vidas for menor ou igual a 3, muda a imagem do o elemento HTML 'v'+vidas
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			//incrementa o valor da variavel vidas com o valor atual dela mesma
			vidas++
		}
	}

	//Atribui para a variavel posicaoX um valor aleatorio multiplicado pelo valor da variavel largura e subtrai por 90 
	var posicaoX = Math.floor(Math.random() * largura) - 90
	//Atribui para a variavel posicaoY um valor aleatorio multiplicado pelo valor da variavel altura e subtrai por 90 
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//A variavel posicaoX recebe 0 se o valor dela for menor que 0, caso contrario recebe o valor dela mesma
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	//A variavel posicaoY recebe 0 se o valor dela for menor que 0, caso contrario recebe o valor dela mesma
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	//Imprime no console o valor das variaveis posicaoX e posicaoY
	console.log(posicaoX, posicaoY)

	//Cria a variavel mosquito e atribui um elemento html criado do tipo img
	var mosquito = document.createElement('img')
	//adiciona uma imagem de mosquito a propriedade src do elemteno HTML mosquito
	mosquito.src = 'imagens/mosquito.png'
	//adiciona uma classe aleatoria ao elemteno HTML mosquito
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	//define a posicao esquerda em px do mosquito na tela
	mosquito.style.left = posicaoX + 'px'
	//define a posicao do topo em px do mosquito na tela
	mosquito.style.top = posicaoY + 'px'
	//define a posição do elemento mosquito
	mosquito.style.position = 'absolute'
	//atribui o valor mosquito para o ID do elemento mosquito
	mosquito.id = 'mosquito'
	//adiciona uma função ao clicar no elemento mosquito
	mosquito.onclick = function() {
		//chama a função remove
		this.remove()
	}
	//adiciona o elemento mosquito no corpo da pagina html
	document.body.appendChild(mosquito)

}

//cria função tamanhoAleatorio que retorna aleatoriamente o nome de uma classe CSS
function tamanhoAleatorio() {
	//cria a variavel classe com valor aleatorio que pode variar de 0 a 2
	var classe = Math.floor(Math.random() * 3)
	//verifica o valor da variavel classe e retorna um  valor
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

//cria funcao ladoAleatorio que retorna aleatoriamente o nome de uma classe CSS
function ladoAleatorio() {
	//cria a variavel classe com valor aleatorio que pode variar com 0 e 1
	var classe = Math.floor(Math.random() * 2)
	//verifica o valor da variavel classe e retorna um valor
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

