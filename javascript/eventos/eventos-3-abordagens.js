// Jeito 1 - Adicionar o evento dentro do próprio elemento
function executar() {
	console.log("Executar");
}

// Jeito 2 - Adicionar o evento diretamente na variável(Referência do botão)
// const botao = document.getElementById("botao");
// const botao = document.querySelector("[botao-acao]");
// botao.onclick = executar;

// Jeito 3 - Adicionar um ouvinte
const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
// console.log("Executar");
// 	executar();
// });

// Método para testar se o browser consegue executar addEventListener
if (btn.addEventListener) {
	btn.addEventListener("click", function () {
		console.log("Executar");
	});
} else {
	btn.attachEvent("click", function () {
		console.log("Executar");
	});
}
