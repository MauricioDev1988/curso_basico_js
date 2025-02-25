/*sairLoop : caractere
valor1, valor2: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    repita
    escreva("Digite valor 1: ")
    leia (valor1)
    escreva("Digite valor 2: ")
    leia (valor2)
    escreval(valor1 + valor2)
    escreval("Digite S para continuar e N para encerrar: ")
    leia(sairLoop)
    ate sairLoop <> "N" && "n"
*/

function acaoBotao(){
var sairLoop, valor1, valor2
do{
    valor1 = prompt("Digite o primeiro valor: ")
    valor2 = prompt("Digite o segundo valor: ")
    alert("Resultado: " + (parseInt(valor1) + parseInt(valor2)))
    sairLoop = prompt("Deseja sair: S/N: ")
}while(sairLoop == "N")

}