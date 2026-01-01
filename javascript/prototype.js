class Carro {
	constructor() {
		this.placa = "AMP-1230";
	}
}

class Bmw extends Carro {
	constructor() {
		super();
		this.nome = "BMW 320i";
	}
}

// const objBmw = new Bmw();
// console.log(objBmw.placa)
// console.log(objBmw.nome)

const veiculo = {
	motor: "50 cavalos",
};

const carro = {
	placa: "AMP-1230",
	__proto__: veiculo,
	acelerar() {
		console.log("Acelerar");
	},
};

const bmw = {
	nome: "BMW 320i",
	__proto__: carro,
};
console.log(bmw.placa);
bmw.acelerar();
bmw.motor;
