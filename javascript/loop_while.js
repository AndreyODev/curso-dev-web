// let numero = 1;
// while (numero <= 10) {
// 	console.log(numero);
// 	numero++;
// }

// contador = "acabou";
// console.log(contador);

// let numero = 10;
// while (numero >= 1) {
// 	console.log(numero);
// 	numero--;
// }

// finish = "acabou";

// console.log(finish);

let postagens = ["Hoje estou passeando em Saquarema", "Hoje fiz um projeto", "Vou para academia mais tarde"];

let contador = 1;
const qtd = postagens.length;

while (contador <= qtd) {
	console.log("-------------------------");
	let postagem = postagens[contador - 1];
	console.log(postagem);
	contador++;
}

finish = "acabou";
console.log(finish);
