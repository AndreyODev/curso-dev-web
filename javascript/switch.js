// function verificarCor() {
// 	let cor = document.getElementById("cor").value;

// 	cor = cor.toLowerCase();

// 	switch (cor) {
// 		case "azul":
// 			document.body.style.background = "blue";
// 			break;
// 		case "verde":
// 			document.body.style.background = "green";
// 			break;
// 		case "vermelho":
// 			document.body.style.background = "red";
// 			break;
// 		default:
// 			document.getElementById("teste").innerHTML =
// 				"Nenhuma cor disponível para: " + cor;
// 	}
// }

function diaDaSemana() {
	var dia = new Date().getDay();

	console.log(dia);
	switch (dia) {
		case 0:
			console.log("Domingo");
			document.getElementById("teste").innerHTML = "Hoje é Domingo";
			break;
		case 1:
			console.log("Segunda");
			document.getElementById("teste").innerHTML = "Hoje é Segunda";
			break;
		case 2:
			console.log("Terça");
			document.getElementById("teste").innerHTML = "Hoje é Terça";
			break;
		case 3:
			console.log("Quarta");
			document.getElementById("teste").innerHTML = "Hoje é Quarta";
			break;
		case 4:
			console.log("Quinta");
			document.getElementById("teste").innerHTML = "Hoje é Quinta";
			break;
		case 5:
			console.log("Sexta");
			document.getElementById("teste").innerHTML = "Hoje é Sexta";
			break;
		case 6:
			console.log("Sábado");
			document.getElementById("teste").innerHTML = "Hoje é Sábado";
			break;
		default:
			document.getElementById("teste").innerHTML = "Não sei que dia é ";
	}
}
