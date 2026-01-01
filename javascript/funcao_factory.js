function ProdutoFactory(nome, preco) {
	return {
		nome,
		preco,
		recuperarAvaliacoes() {
			console.log(`Avaliações para ${this.nome}`);
		},
	};
}

const produto1 = ProdutoFactory("Notebook", 1200);
const produto2 = ProdutoFactory("Mouse", 80);

console.log(produto1);
console.log(produto2);
produto1.recuperarAvaliacoes();
