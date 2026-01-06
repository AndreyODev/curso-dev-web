const obj = document.getElementById("itens");
// console.log(obj.quantiade); Não funciona para atributos personalizados
obj.setAttribute("quantidade", 10);
console.log(obj.getAttribute("quantidade"));

obj.dataset.status = "Finalizado";
console.log(obj.dataset.status);

console.log(obj.hasAttribute("quantidade"));
obj.removeAttribute("data-status");

console.log(obj.attributes[0]);
console.log(obj.attributes.id);
console.log(obj.attributes["quantidade"]);
