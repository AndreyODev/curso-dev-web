// onclik;

function eventoClick() {
	alert("Acionou um evento de click");
	document.body.style.backgroundColor = "green";
}

// function eventoDblClick() {
// alert("Acionou um evento de click");
// 	document.body.style.backgroundColor = "green";
// }

function viraVermelho() {
	let div = document.getElementById("teste");
	div.style.background = "red";
}

function viraAzul() {
	let div = document.getElementById("teste");
	div.style.background = "blue";
}

// function adicionarTexto() {
// 	let p = document.getElementById("texto");
// 	p.innerHTML += "O mouse moveu<br>";
// }

function limpaTexto() {
	document.getElementById("campoTexto").value = "";
}
function mudou() {
	console.log("Mudou");
}

// function teclaPressionada() {
// 	let input = document.getElementById("campoTexto").value;
// 	console.log(input);
// }

function soltandoTecla() {
	let input = document.getElementById("campoTexto").value;
	console.log(input);
}
