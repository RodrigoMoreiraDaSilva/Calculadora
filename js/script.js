const botaoPonto = document.querySelector(".ponto");
const botaoDeApagar = document.querySelector(".apagar");
const botaoNumeros = document.querySelectorAll(".numero");
const botaoResultado = document.querySelector(".resultado");
const botaoLimparTudo = document.querySelector(".limpar-tudo");
const botaoOperadoresNumericos = document.querySelectorAll(".operacao");
const componenteOperacaoAtual = document.querySelector(".operacao-atual");
const componenteOperacaoAnterior = document.querySelector(".operacao-anterior");


var operacaoAtual = "";
var resultadoTotal = "";
var operacaoAnterior = "";

botaoNumeros.forEach((botao) => {
    botao.addEventListener("click", () => {
        adicionarNumero(botao.innerHTML);
    });
});

botaoPonto.addEventListener("click", () => {
    if(operacaoAtual.length < 13) {
        if(!operacaoAtual.includes(".") && operacaoAtual != "") {
            operacaoAtual = operacaoAtual + ".";
            atualizarOutput();
        }
    }
});

botaoDeApagar.onclick = function () {
    apagar();
};

botaoLimparTudo.onclick = function () {
    
}

function adicionarNumero(numeroClicado) {
    resultadoTotal == "" ? atualizarOutput() : limparTudo();
    
    if(operacaoAtual.length < 14)
        operacaoAtual = operacaoAtual + numeroClicado;
    else 
        alert("número máximo de digitos atingido");

    atualizarOutput();
}

function apagar() {
    operacaoAtual = operacaoAtual.substring(0, operacaoAtual.length - 1);
    atualizarOutput();
}

function limparTudo() {
    operacaoAtual = "";
    resultadoTotal = "";
    operacaoAnterior = "";
}

function atualizarOutput() {
    componenteOperacaoAtual.innerHTML = operacaoAtual;
    componenteOperacaoAnterior.innerHTML = operacaoAnterior;
}