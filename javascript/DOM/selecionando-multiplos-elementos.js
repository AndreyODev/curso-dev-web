// JEITO 1 - SELECIONAR O ELEMENTO PELO NOME DA TAG
const obj = document.getElementsByTagName("li");
console.log(obj[1]);

for (let contador = 0; contador < obj.length; contador++) {
	console.log(obj[contador].textContent);
}
const colecao = Array.from(obj);

colecao.forEach(function (item, indice, array) {
	console.log(item.textContent);
});

// JEITO 2 - SELECIONAR TODOS OS ELEMENTO PELO NOME DA CLASS
const obj2 = document.getElementsByClassName("primeiro");
console.log(obj2);

// JEITO 3 - SELECIONAR O INPUT PELO NAME
const obj3 = document.getElementsByName("nome");
console.log(obj3);

// JEITO 4 - SELECIONAR TODOS OS ELEMENTO PELO NOME DA CLASS
const obj4 = document.querySelectorAll(".primeiro");
console.log(obj4.item(1));
