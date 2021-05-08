const botaoPonto = document.querySelector('.ponto');
const botaoDeApagar = document.querySelector('.apagar');
const botaoResultado = document.querySelector('.resultado');
const botaoNumeros = document.querySelectorAll('.numero');
const botaoLimparTudo = document.querySelector('.limpar-tudo');
const botaoOperadoresNumericos = document.querySelectorAll('.operacao');
const componenteOperacaoAtual = document.querySelector('.operacao-atual');
const componenteOperacaoAnterior = document.querySelector('.operacao-anterior');

var operacaoAtual = "";
var operacaoAnterior = "";
var resultadoTotal = "";

function apagar() {
    operacaoAtual = operacaoAtual.substring(0, operacaoAtual.length - 1)
    atualizarOutput(operacaoAtual)
}

function selecionarOperadorMatematico(operador)  {
    if(operacaoAtual != "" || resultadoTotal != "") {
        if(!operacaoAnterior != "") {
            switch(operador) {
                case '+':
                    operacaoAnterior = operacaoAtual + "+"
                    operacaoAtual = ""
                    atualizarOutput(operacaoAtual)
                break;
        
                case '-':
                    operacaoAnterior = operacaoAtual + "-"
                    operacaoAtual = ""
                    atualizarOutput(operacaoAtual)
                break;
        
                case '÷': 
                    operacaoAnterior = operacaoAtual + "/"
                    operacaoAtual = ""
                    atualizarOutput(operacaoAtual)
                break;
        
                case '×':
                    operacaoAnterior = operacaoAtual + "*"
                    operacaoAtual = ""
                    atualizarOutput(operacaoAtual)
                break;
            }
        }
        else {
            var resultado = operacaoAnterior + operacaoAtual
            operacaoAnterior = eval(resultado)
            resultadoTotal = ""

            switch(operador) {
                case '+':
                    operacaoAnterior = operacaoAnterior + "+"
                    operacaoAtual = ""
                    atualizarOutput(operacaoAtual)
                break;
        
                case '-':
                    operacaoAnterior = operacaoAnterior + "-"
                    operacaoAtual = ""
                    atualizarOutput(operacaoAtual)
                break;
        
                case '÷': 
                    operacaoAnterior = operacaoAnterior + "/"
                    operacaoAtual = ""
                    atualizarOutput(operacaoAtual)
                break;
        
                case '×':
                    operacaoAnterior = operacaoAnterior + "*"
                    operacaoAtual = ""
                    atualizarOutput(operacaoAtual)
                break;
            }
        }
    }
}

function atualizarOutput(operacaoAtual) {
    componenteOperacaoAtual.innerHTML = operacaoAtual
    componenteOperacaoAnterior.innerHTML = operacaoAnterior
}

function adicionarNumero(numeroClicado) {
    if(resultadoTotal != "") { 
        resultadoTotal = ""
        operacaoAtual = ""
        operacaoAnterior = ""
        atualizarOutput(operacaoAtual)
    }

    if(operacaoAtual.length < 14) {
        operacaoAtual = operacaoAtual + numeroClicado;
        atualizarOutput(operacaoAtual)
    }
}

botaoNumeros.forEach(botao => {
    botao.addEventListener('click', () => {
        adicionarNumero(botao.innerHTML)
    })
})

botaoPonto.addEventListener('click', () => {
   if(operacaoAtual.length < 13) {
        if(!operacaoAtual.includes('.') && operacaoAtual != "" ) {
            operacaoAtual = operacaoAtual + "."
            atualizarOutput(operacaoAtual)
        }
   }
})

botaoDeApagar.onclick  = function() {
    apagar()
}

botaoLimparTudo.onclick = function() {
    operacaoAtual = ""
    operacaoAnterior = ""
    atualizarOutput(operacaoAtual)
}

botaoOperadoresNumericos.forEach(operador => {
    operador.addEventListener('click', () => {
        selecionarOperadorMatematico(operador.innerHTML)
    })
})

botaoResultado.onclick = () => {
    var resultadoIs = operacaoAnterior + operacaoAtual
    resultadoTotal = eval(resultadoIs)
    operacaoAnterior = resultadoTotal
    operacaoAtual = ""

    atualizarOutput(operacaoAtual)
}