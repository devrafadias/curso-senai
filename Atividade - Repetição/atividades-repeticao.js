var result = ''
var resultAlunos = ''

function atividade01() {
    result = "";
    for(var i = 1; i <= 20; i++) {
        result += i + "<br>"
    }
    resposta.innerHTML =  result;
    exampleModalLabel.innerHTML = "Resposta da atividade 01"
}

function atividade02() {
    var ferramenta = prompt("Informe o nome da ferramenta: ")
    var qtdeFerramentas = prompt("Quantidade de ferramentas: ")
    result = "";
    for(var i = 1; i <= qtdeFerramentas; i++) {
        result += ferramenta + " | "
    }
    resposta.innerHTML =  result
    exampleModalLabel.innerHTML = "Resposta da atividade 02"
}

function atividade03() {
    var qtdeCoelhos = prompt("Informe a quantidade de coelhos: ")
    while(isNaN(qtdeCoelhos) || qtdeCoelhos < 3) {
        qtdeCoelhos = prompt("AVISO: É obrigatório informar um valor maior ou igual a 3.\nInforme a quantidade de coelhos: ")
    }

    var qtdeAnos = prompt("Quantidade de anos: ")

    var mediaQtdeCoelhos = Number(qtdeCoelhos);

    result = ""
    for(var i = 1; i <= qtdeAnos; i++) {   
        result += i + "º ano: " + mediaQtdeCoelhos + " coelhos<br>"
        mediaQtdeCoelhos = mediaQtdeCoelhos * 7
    }
    resposta.innerHTML =  result;
    exampleModalLabel.innerHTML = "Resposta da atividade 03"
}

function atividade04() {
    var numero = prompt("Informe um número: ")
    var soma = 0
    var divisores = ''
    
    for(var i=1; i<numero; i++) {
        if((numero % i) == 0) {
            divisores += (divisores == '') ? i : ", " + i 
            soma = soma + i
        }
    }
        
    if(soma == numero) {
        result = `Divisores do ${numero}: ${divisores} (Soma: ${soma}) <br>
                  ${numero} é um número perfeito.`
    } else {
        result = numero + " não é um número perfeito."
    }
    resposta.innerHTML =  result;
    exampleModalLabel.innerHTML = "Resposta da atividade 04"
}

function atividade05() {
    var nomeAluno = aluno.value
    var notaAluno = Number(nota.value)
        
    if(nomeAluno == "" || notaAluno == 0 || isNaN(notaAluno)) {
        alert("Informe os dados corretamente!")
        aluno.focus()
        return;
    }

    var notaLetra = ''
    if(notaAluno < 60) {
        notaLetra = 'F'
    } else if(notaAluno < 70) {
        notaLetra = 'D'
    } else if(notaAluno < 80) {
        notaLetra = 'C'
    } else if(notaAluno < 90) {
        notaLetra = 'B'
    } else {
        notaLetra = 'A'
    }

    resultAlunos += `<hr>Aluno ${nomeAluno}, nota ${notaLetra}`

    listaAlunos.innerHTML = resultAlunos;
}

btnEx01.addEventListener("click", atividade01)
btnEx02.addEventListener("click", atividade02)
btnEx03.addEventListener("click", atividade03)
btnEx04.addEventListener("click", atividade04)
btnEx05.addEventListener("click", atividade05)

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})