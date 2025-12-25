// --------------- setTimeout ------------------
// let tempo;
// function ativarContagem() {
// 	document.getElementById("tempo").innerHTML = "Começou a contar!";
// EXECUTA APENAS 1 VEZ APÓS O TEMPO DETERMIUNADO
// 	tempo = setTimeout(function () {
// 		document.getElementById("tempo").innerHTML = "executou o setTimeout!";
// 		document.body.style.background = "blue";
// 	}, 5000);
// }

// function pararContagem() {
// 	clearTimeout(tempo);
// 	document.getElementById("tempo").innerHTML = "Parou a contagem!";
// }

// --------------- setInterval ------------------
// let tempo;
// function ativarContagem() {
// 	tempo = setInterval(() => {
// 		console.log("Repetindo...");
// 	}, 1000);
// }

// function pararContagem() {
// 	clearTimeout(tempo);
// 	document.getElementById("tempo").innerHTML = "Parou a contagem!";
// }

// --------------- setInterval ------------------
let tempo;
function ativarContagem() {
	tempo = setInterval(function () {
		var cronometro = document.getElementById("tempo").innerHTML;
		var soma = parseInt(cronometro) - 1;

		if (soma === 0) {
			document.getElementById("tempo").innerHTML = "Tempo esgotado";
			pararContagem();
		} else {
			document.getElementById("tempo").innerHTML = soma;
		}
	}, 1000);
}

function pararContagem() {
	clearInterval(tempo);
}
