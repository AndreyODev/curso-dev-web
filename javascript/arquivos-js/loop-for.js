// for (let i = 1; i <= 10; i++) {
// 	document.getElementById("teste").innerHTML += i + "<br>";
// }

// var ano = new Date().getFullYear();

// for (let i = ano; i > 1900; i--) {
// 	document.getElementById("ano").innerHTML +=
// 		"<option value='" + i + "'>" + i + "</option> >";
// }

const carros = ["Bmw", "Ferrari", "Gol", "Del Rey"];

var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
	document.getElementById("teste").innerHTML += carros[i] + "<br>";
}
