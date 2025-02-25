


function acaoBotao() {
    var numero, fatorial, contador
    numero = prompt("Digite um numero para calcular fatorial: ")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
        
    }
    
document.getElementById("paragrafo").innerText = fatorial

}