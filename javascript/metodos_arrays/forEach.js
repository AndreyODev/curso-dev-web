// forEach
const lista = ["Andrey", "Jefinho", "Gabryella"];

// for(let contador = 0; contador < lista.length; contador++){
//   console.log(lista[contador])
// }

// for(let contador in lista){
//   console.log(lista[contador])
// }

// Jeito 1
lista.forEach(function (nome) {
	console.log(nome);
});

// Jeito 2
const percorrer = function (item, indice, array) {
	console.log(item);
};
lista.forEach(percorrer);

// Jeito 3
lista.forEach((item) => {
	console.log(item);
});

// Jeito 4
Array.prototype.listaPercorrida = function (percorrerLista) {
	for (let indice = 0; indice < this.length; indice++) {
		percorrerLista(this[indice], indice, this);
	}
};

const percorrerLista = function (item) {
	console.log(item);
};

lista.listaPercorrida(percorrerLista);
