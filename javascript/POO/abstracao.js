// ABSTRAÇÃO
class Carro {
	constructor() {
		this.marca = "Volkswagen";
		this.modelo = "Gol";
		this.cor = "prata";
		this.placa = "EMJ-2565";
	}
}

const carro1 = new Carro();
const carro2 = new Carro();
carro2.cor = "black";
const carro3 = new Carro();

console.log(carro1);
console.log(carro2);
console.log(carro3);

class Produto {
	constructor() {
		// Roupas
		this.tamanho = "M";
		this.cor = "Vermelho";
		this.preco = "35,90";

		// Eletronicos
		this.altura = "50cm";
		this.largura = "30cm";
	}
}
