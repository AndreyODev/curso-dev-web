// Métodos - Retornos e Parâmetros

class Usuario {
	constructor() {
		this.email = "";
		this.senha = "";
		this.desconto = 0;
		this.totalCompra = 0;
	}

	login() {
		let emailBD = "andrey@gmail.com";
		let senhaBD = "1qaz";
		if (senhaBD === this.senha) {
			// console.log("Senha válida");
			return "Senha válida";
		} else {
			// console.log("Senha inválida");
			return "Senha inválida";
		}
	}

	calcularDesconto(cupom) {
		let desconto = 0;
		if (cupom == "DESC20") {
			desconto = 20;
		} else if (cupom == "DESC10") {
			desconto = 10;
		}
		return this.totalCompra - desconto;
	}
}

// let usuario = new Usuario();
// usuario.email = "andrey@gmail.com";

// usuario.senha = "1qaz";

// usuario.login();

// let mensagem = usuario.login();

// console.log(mensagem);

let usuario = new Usuario();
usuario.totalCompra = 500;

console.log(usuario.calcularDesconto("DESC10"));
