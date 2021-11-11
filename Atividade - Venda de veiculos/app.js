var frmVeiculo 
var frmPreco = new Number
var frmEntradaPorcentagem = new Number
var valorEntrada = new Number
var valorParcela = new Number

btnPromocao.addEventListener("click", function(){
    frmVeiculo = veiculo.value
    frmPreco = preco.value
    frmEntradaPorcentagem = entradaPorcentagem.value
    calculaValorEntrada()
    calculaParcela()
    mostrarDetalhesPromocao()
})

function calculaValorEntrada() {
    valorEntrada = (frmPreco * (frmEntradaPorcentagem / 100)).toFixed(2)
}

function calculaParcela() {
    valorParcela = (((frmPreco - valorEntrada) / 60) * 0.7).toFixed(2)
}

function mostrarDetalhesPromocao() {
    app.innerHTML = `
            <div class="card">
                <div class="card-body">
                    Promoção: ${frmVeiculo}<br>
                    Preço do veículo: R$ ${frmPreco}<br>
                    Entrada de ${frmEntradaPorcentagem}%: R$ ${valorEntrada}<br>
                    + 60 parcelas de: R$ ${valorParcela}<br>
                </div>
            </div>`

    exibirBotaoNovoCalculo() 
}

function exibirBotaoNovoCalculo() {
    btnNovoCalculo.style.display = "block"
    
    btnNovoCalculo.addEventListener("click", function(){
        window.location="index.html"
    })
}