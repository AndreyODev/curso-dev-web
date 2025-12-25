// // Declaração de variáveis com var
// var a, b, c;

// var nome, sobrenome, nomeCompleto, idade;
// // Atribuição de valores
// a = 2;
// b = 3;
// c = a + b;
// // alert(c);

// nome = "Andrey";
// sobrenome = "Oliveira Nunes";
// idade = 19;
// nomeCompleto = nome + " " + sobrenome;

// pessoa = nome + " " + idade;
// document.getElementById("texto").innerHTML = pessoa;

// // Declaração de variáveis com let
// let x = 10;

// {
// 	let x = 2;
// }

// // document.getElementById("texto").innerHTML = x;

// // Declaração de variável com const
// const y = 5;

// document.getElementById("texto").innerHTML = y;

let horario = 18;
// alert(horario);

let saudacao = "";

if (horario < 12) {
	saudacao = "bom dia";
} else if (horario < 18) {
	saudacao = "Boa tarde";
} else {
	saudacao = "Boa noite";
}

// document.getElementById("teste").innerHTML = `Olá, ${saudacao}`;

const nome = "teste3";
// nome = "teste2";
// alert(nome);
for (let i = 1; i <= 3; i++) {
	// console.log("Coma 1 pedaço de pizza");
	// alert(teste);
	alert(nome);
}
