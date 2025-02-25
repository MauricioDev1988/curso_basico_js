function acaoBotao() {
    // body...

var valor1, valor2, operacao, resultado


valor1 = prompt("Digite seu valor 1: ")
operacao = prompt("Digite uma das operações: + , - , * , /")
valor2 = prompt("Digite seu valor 2: ")

    
    switch (operacao) {
        case "+":
        resultado = parseInt(valor1) + parseInt(valor2)
        break;

        case "-":
        resultado = parseInt(valor1) - parseInt(valor2)
        break;

        case "*":
        resultado = parseInt(valor1) * parseInt(valor2)
        break;

        case "/":
        resultado = parseInt(valor1) / parseInt(valor2)
        break;
    }
    


document.getElementById("paragrafo").innerText = resultado

}