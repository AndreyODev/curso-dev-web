// const lista = ["arroz", "feijão", "macarrão"];

// alert("Eu gosto mais de " + lista[0] + " com " + lista[2]);
// lista[0] = "café";

// alert(lista.length);

// alert(lista[lista.length - 1]);

// lista.push("carne");

// lista[lista.length] = "File de peito";
// alert(lista[0]);

// lista.unshift("pão");
// lista.splice(2, 0, "ovo");

// const x = "Andrey";
// alert(lista);
// alert(Array.isArray(x));

// document.getElementById("texto").innerHTML = lista.join(", ");

// const lista1 = ["arroz", "feijão", "leite", "macarrão"];
// const lista2 = ["suco", "refrigerante", "carné"];
// const lista3 = ["sabonete", "desodorante", "gilete"];

// const superLista = lista1.concat(lista2, lista3);

// lista.pop();
// lista.push("Teste");
// lista.shift();
// lista.unshift("pão");
// lista.splice(1, 0, "item1", "item2");

// const jogadores = [
// 	"Neymar",
// 	"Cristiano Ronaldo",
// 	"Messi",
// 	"Ronaldinho Gaúcho",
// 	"Vini Jr",
// 	"Andrey",
// ];

// const craques = jogadores.slice(1, 4);

// const ordem = jogadores.sort();

// jogadores.reverse();

const numeros = [40, 100, 1, 5, 10, 90, 200, 3];

// numeros.sort(function (a, b) {
// 	return a - b;
// });

// numeros.sort((a, b) => b - a);

function maiorNumero(array) {
	return Math.max.apply(null, array);
}

// document.getElementById("texto").innerHTML = maiorNumero(numeros);

// let menorNumero = Math.min(...numeros);

// document.getElementById("texto").innerHTML = menorNumero;

const maior20 = numeros.filter((filtragem) => filtragem > 3);

// function filtragem(value) {
// 	return value >= 100;
// }

document.getElementById("texto").innerHTML = maior20;
