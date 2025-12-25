class Carro {
	constructor(valor1, valor2, valor3) {
		this.marca = valor1;
		this.modelo = valor2;
		this.ano = valor3;
	}
	buzina() {
		return "O" + " " + this.modelo + " buzinou Biiiiiiiiiiiiii";
	}
}

const uno = new Carro("Fiat", "uno", 2001);
const gol = new Carro("Volkswagen", "gol", 2013);

console.log(uno.buzina());
gol.ano = 2016;
console.log(gol);
