let nome = "Notebook";
let preco = 1200;

const produto = {
	nome, // nome: nome
	preco, // preco: preco
	exibiProduto() {
		console.log(`${this.nome}, ${this.preco}, ${this.categoria}`);
	},
};

console.log(preco);
produto.categoria = "Eletronicos";
produto.exibiProduto();

produto.exibirPreco = function () {
	console.log(`Preço: ${this.preco}`);
};
// console.log(produto);
produto.exibirPreco();
