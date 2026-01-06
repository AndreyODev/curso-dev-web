// const obj = document.getElementById("conteudo");
// obj.textContent = "<p style='color:red'>Andrey</p>";
// obj.innerHTML = "<p style='color:red'>Jefinho</p>";

const ul = document.getElementById("itens");
const li = document.createElement("li");

// li.textContent = "Gabryella"; // Jeito 1 de adicionar o conteudo
// const texto = document.createTextNode("Gabryella"); // Jeito 2 de adicionar o conteudo
// li.appendChild(texto);
// ul.appendChild(li);

const btnAdicionar = document.querySelector("#btn-adicionar");

btnAdicionar.addEventListener("click", function () {
	// li.textContent = "Gabryella";
	// ul.appendChild(li);
	const itemClonar = document.getElementById("item-clocar");
	const item = itemClonar.cloneNode(true);
	ul.appendChild(item);
});

const btnRemover = document.querySelector("#btn-remover");

btnRemover.addEventListener("click", function () {
	ul.removeChild(li);
});
