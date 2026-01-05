const obj = document.getElementsByName("cadastro");
// console.log(obj[0]);
// console.log(document.forms[0]);
// console.log(document.cadastro.sexo);

// const nome = (document.cadastro.nome.value = "Andrey");
// console.log(nome);

// document.cadastro.sexo.value = "feminino";

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	// document.cadastro.nome.value = "Jefinho";
	// document.cadastro.email.value = "jefinho@gmail.com";
	// document.cadastro.sexo.value = "masculino";

	let nome = document.cadastro.nome.value;
	let email = document.cadastro.email.value;
	let sexo = document.cadastro.sexo.value;
	console.log(nome);
	console.log(email);
	console.log(sexo);
});
