// Filter
const usuarios = [
	{ nome: "Andrey", idade: 20 },
	{ nome: "Jefinho", idade: 9 },
	{ nome: "Gabryella", idade: 2 },
];

const filtro = 18;
const idade = function (item, indice, array) {
	return item.idade >= filtro;
	// if(item.idade >= 18) {
	//   return true // Poderia ter colocado para retornar o item
	// } else {
	//   return false
	// }
};

const usuariosMaiorIdade = usuarios.filter(idade);
console.log(usuariosMaiorIdade);

const carros = [
	{ nome: "Gol", marca: "volkswagem" },
	{ nome: "iX35", marca: "hyundai" },
	{ nome: "Santa Fé", marca: "hyundai" },
	{ nome: "Polo", marca: "volkswagem" },
];

const carrosHyundai = carros.filter(function (item, indice, array) {
	return item.marca == "hyundai";
});

console.log(carrosHyundai);
