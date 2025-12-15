// Declaração de variáveis com var
var a, b, c;

var nome, sobrenome, nomeCompleto, idade;
// Atribuição de valores
a = 2;
b = 3;
c = a + b;
// alert(c);

nome = "Andrey";
sobrenome = "Oliveira Nunes";
idade = 19;
nomeCompleto = nome + " " + sobrenome;

pessoa = nome + " " + idade;
document.getElementById("texto").innerHTML = pessoa;

// Declaração de variáveis com let
let x = 10;

{
	let x = 2;
}

// document.getElementById("texto").innerHTML = x;

// Declaração de variável com const
const y = 5;

document.getElementById("texto").innerHTML = y;
