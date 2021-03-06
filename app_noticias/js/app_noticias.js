//lista com todas as noticias
let todasNoticias = []

//ocultando o titulo das noticias 
document.querySelector("#tituloNoticias").style = "display: none"

//2 - Adicionar ao Array todasNoticias as noticias do campo textarea da tela
//2.1 - Fazer uma verificação se o campo noticias está preenchido corretamente alert("Digite uma noticia!")
//2.2 - Mostre o tituloNoticias com a quantidade de noticias id="qtdNoticias"
//2.3 - Faça uma limpeza no campo de noticias e aponte o foco para ele
// * Não exibir as noticias ainda, deixe isso para a função mostrarNoticias
const cadastrarNoticia = function(){
  
    if(noticia.value == null || noticia.value.trim() == "") {
        alert("Digite uma noticia!")
        return
    }
    
    todasNoticias.push(noticia.value)
    qtdNoticias.innerHTML = todasNoticias.length
    document.querySelector("#tituloNoticias").style = "display: block"
    noticia.value = ''
    noticia.focus()
}

//3 - Mostrar as noticias cadastradas
//3.1 - Fazer uma verificação se o o array todasNoticias tem algo na lista alert("Você não possui noticias cadastradas")
//3.2 - Usar um forEach no todasNoticias para exibir as noticias uma a uma dentro da div id="mostrarNoticias" em uma tag article conforme o exemplo abaixo:
//<article class="message is-info is-medium"><div class="message-header"><h1>Notícia 1</h1></div><div class="message-body">
// Devastação da Amazônia não para e atinge 13 mil km² em 1 ano </div></article>
//3.3 - Faça uma limpeza no campo de noticias
const listarNoticias = function(){
    let result = ''
    todasNoticias.forEach((noticia, item) => {
        result += `<article class="message is-info">
                        <div class="message-header">
                            <p>Noticia ${item+1}</p>
                        </div>
                        <div class="message-body">${noticia}</div>
                   </article>`

    })
    mostrarNoticias.innerHTML = result
}

//4 - Limpar os dados do array todasNoticias
//4.1 - Ocultar o tituloNoticias
//4.2 - Limpar a div id="mostrarNoticias"
const deletarNoticias = function(){
    if(todasNoticias.length == 0) {
        alert("Não há registros de noticias para apagar.")
    } else if(confirm("Tem certeza que deseja apagar todas as noticias?")) {
        todasNoticias.splice(0,todasNoticias.length)
        mostrarNoticias.innerHTML = ''
        document.querySelector("#tituloNoticias").style = "display: none"
        noticia.focus()
        alert("Noticias apagadas!")
    }
}

//1 - ADICIONAR EVENTOS DE CLICK PARA CADA UM DOS TRES BOTOES DA TELA (btnCadastrarNoticia, btnMostrar, btnDeletar)
btnCadastrarNoticia.addEventListener("click", cadastrarNoticia)
btnMostrar.addEventListener("click", listarNoticias)
btnDeletar.addEventListener("click", deletarNoticias)