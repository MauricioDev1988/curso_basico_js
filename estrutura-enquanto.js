/*

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

escreva("Digite a quantidade de vezes que você quer testar: ")
leia(limite)
contador :=0
    enquanto contador < limite faca
    escreva("Digite o nome da pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoas: ")
    leia(idade)
        se idade >= 18 entao
        escreval (nome," tem ", idade, " anos e é maior idade")
        senao se
        escreval (nome," tem ", idade, " anos e é menor idade")
        fimse
    contador:= contador +1
    fimenquanto
*/
function acaoBotao() {
var nome, idade, limite, contador
limite = prompt("Digite a quantidade de vezes que você quer testar:  ")
contador = 0
    while (contador < limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade de " + nome + ":")
        if (idade > 18)
            alert(nome +  " é maior de idade")
        else
            alert(nome +  " é menor de idade")
        contador++    
    }  
}