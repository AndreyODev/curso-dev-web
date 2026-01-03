// Map
const lista = [1, 2, 3];
const resultado = lista.map(function (n) {
	return n * 2;
});

console.log(resultado);

const pessoas = ["Andrey", "Jefinho", "Gabryella"];

let funcao = function (item, indice, array) {
	return { nome: item };
};

const novoArray = pessoas.map(funcao);

console.log(novoArray);

// 1 dolar = 5
const produtosDolar = [
	{ produto: "Notebook", preco: 750, moeda: "$" },
	{ produto: "Celular", preco: 500, moeda: "$" },
];

const produtosReais = produtosDolar.map(function (item, indice, array) {
	return {
		produto: item.produto,
		preco: item.preco * 5,
		moeda: "R$",
	};
});

console.log(produtosReais);
