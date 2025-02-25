/*var nome, idade;

nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")

alert("Seu nome e " + nome + " e sua idade e " + idade + " anos")


var nome, nota1, nota2, media;

nome = prompt("Digite seu nome: ")
nota1 = prompt("Digite sua primeira nota: ")
nota2 = prompt("Digite sua segunda nota: ")

media = ((parseInt(nota1) + parseInt(nota2)) / 2)

if (media >=5)
    alert(nome + " sua media e: " + media + " e voce esta aprovado!")
else
    alert(nome + " sua media e: " + media + " e voce esta reprovado!")

*/

var nome, nota1, nota2, nota3, frequencia;

passou = false;

nome = prompt("Digite seu nome: ")
nota1 = prompt("Digite sua primeira nota: ")
nota2 = prompt("Digite sua segunda nota: ")
nota3 = prompt("Digite sua terceira nota: ")

frequencia = prompt("Qual a frequencia do aluno: ")


media = ((parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3)

if (media >=7 && frequencia >= 75)
    alert(nome + " sua media e " + media + " sua frequencia e " + frequencia + " e voce esta aprovado!")
else if (media < 7 && media >= 5 && frequencia >= 75)
    alert(nome + " sua media e " + media + " sua frequencia e " + frequencia + " e voce esta em recuperacao!")
else
alert(nome + " sua media e " + media + " sua frequencia e " + frequencia + " e voce esta reprovado!")  
