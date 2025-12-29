//  HERANÇA E POLIMORFISMO
// CLASSES: ANIMAL, CAO, PASSARO, PAPAGAIO

// SuperClasse
class Animal {
	constructor(cor, tamanho, peso) {
		this.cor = cor;
		this.tamanho = tamanho;
		this.peso = peso;
	}

	correr() {
		console.log("correr");
		console.log("como");
		console.log("um");
		// Exemplo: tem mais de 30 linhas dizendo como cada animal corre
	}

	dormir() {
		console.log("dormir");
	}
}

// subClasse
class Cao extends Animal {
	constructor(cor, tamanho, peso, tamanhoOrelha) {
		super(cor, tamanho, peso);
		this.tamanhoOrelha = tamanhoOrelha;
	}

	correr() {
		super.correr();
		console.log("cao");
		// Posso pegar e utilizar só a parte que mostra como o cão corre
	}

	latir() {
		console.log("latir");
	}
}

// subClasse
class Passaro extends Animal {
	constructor(cor, tamanho, peso) {
		super(cor, tamanho, peso);
	}

	correr() {
		super.correr();
		console.log("passaro");
		// Posso pegar e utilizar só a parte que mostra como o cão corre
	}

	voar() {
		console.log("voar");
	}
}

// subClasse
class Papagaio extends Passaro {
	constructor(cor, tamanho, peso, sabeFalar) {
		super(cor, tamanho, peso);
		this.sabeFalar = sabeFalar;
	}

	falar() {
		console.log("falar");
	}
}

// INSTÂNCIAS
const animal = new Animal("Vermelho", 60, 40);
console.log(animal.cor);

const cao = new Cao("Preto", 40, 20, 5);
// cao.correr();
// cao.latir();
// console.log(cao.tamanhoOrelha);
console.log(cao.cor);

const passaro = new Passaro("Branco", 30, 8);
console.log(passaro.cor);
// passaro.correr();
// passaro.voar();
// passaro.dormir();

const papagaio = new Papagaio("Blue", 20, 5, true);
console.log(papagaio.cor);
console.log(papagaio.sabeFalar);
//papagaio.falar(); // Vem da sua própria classe
//papagaio.correr(); // Vem da classe Animal
//papagaio.voar(); // Vem da classe Passaro
