// REDUCE
const numeros = [2, 3, 5];

// PRIMEIRA VEZ -> 6 + 2 = 8
// SEGUNDA VEZ -> 8 + 3 = 11
// TERCEIRA VEZ -> 11 + 5 = 16

const funcao = function (acumulador, item, indice, array) {
	console.log("Indice:" + indice);
	console.log("ac:" + acumulador);
	console.log("item:" + item);
	console.log("---------");
	return acumulador + item;
};

const resultado = numeros.reduce(funcao, 6);
console.log(resultado);

const produtos = [
	{ nome: "Notebook", promocao: true },
	{ nome: "Celular", promocao: false },
];

const produtosPromocao = produtos.map(function (produto) {
	return produto.promocao;
});

console.log(produtosPromocao);

const funcaoPromo = function (acumulador, item, indice, array) {
	return acumulador || item;
};
const novo = produtosPromocao.reduce(funcaoPromo);

console.log(novo);
if (novo == true) {
	console.log("Tem promoção");
} else {
	console.log("Não tem promoção");
}

const lista = ["Andrey", "Jefinho", "Gabryella"];

let listaHTML = lista.reduce((acumulador, item) => {
	return (acumulador += `<li>${item}</li>`);
}, "");

console.log(listaHTML);
