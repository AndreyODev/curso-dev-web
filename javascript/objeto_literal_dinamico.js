let nome = "Notebook";
let preco = 1200;

const produto = {
	nome, // nome: nome
	preco, // preco: preco
	exibiProduto: function () {
		console.log(`${this.nome}, 
    ${this.preco}, ${this.categoria}`);
	},
};

console.log(preco);
produto.categoria = "Eletronicos";
produto.exibiProduto();
console.log(produto);
