// MÉTODOS ARRAYS
const estados = ["Rio de Janeiro", "São Paulo", "Minas Gerais"];

// Forma de remover elementos do array
estados.pop();
estados.shift();

// Forma de adicionar elementos do array
estados.push("Bahia");
estados.unshift("Ceará");

// Forma de retornar um novo array
// const novo = estados.splice(0, 2, "Rio grande do norte")

const novo = estados.slice(1, 3);
console.log(novo);

// Forma de converter um Array em String / String em Array
const usuarios = ["Andrey", "Jefinho", "Gabryella"];

let texto = usuarios.join(", ");
let arrayTexto = texto.split(", ");

console.log(texto);
console.log(arrayTexto);
