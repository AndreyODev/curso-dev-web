// Encapsulamento, modificadores de acesso e getter e setter

class ContaBancaria {
	#numeroConta;
	#saldo;
	constructor() {
		this.#numeroConta = 0;
		this.#saldo = 0;
	}

	get numeroConta() {
		return "Número da conta: " + this.#numeroConta;
	}

	set numeroConta(numero) {
		if (numero > 0) {
			this.#numeroConta = numero;
		}
	}

	get saldo() {
		return "Saldo: " + this.#saldo;
	}

	set saldo(valor) {
		if (valor > 0) {
			this.#saldo = valor;
		}
	}

	sacar(valorSaque) {
		this.#saldo -= valorSaque;
		return this.#saldo;
	}

	depositar(valorDeposito) {
		this.#saldo += valorDeposito;
		return this.#saldo;
	}
}

const conta = new ContaBancaria();
conta.numeroConta = 200;
console.log(conta.numeroConta);

conta.saldo = 900;

conta.sacar(250);
conta.depositar(500);

console.log(conta.saldo);
