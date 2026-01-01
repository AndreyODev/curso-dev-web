// Tratamento de erros com Try Catch
function contaQuantidadeLetras(produto) {
	try {
		console.log(produto.nome.length);
		console.log("Teste");
	} catch (erro) {
		tratarErro(erro);
		// console.log("Código de erro: 164")
	} /*finally{
    console.log("Finally")
  } */
}

function tratarErro(erro) {
	throw new Error("Código de erro: 164");
}
const produto = {
	nom: "Notebook",
	preco: 1200,
};

contaQuantidadeLetras(produto);
