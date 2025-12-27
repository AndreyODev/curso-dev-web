// NOTAÇÃO LITERAL
const hotel = {
	nome: "Hotel Charmoso",
	qtdQuartos: 0,
	qtdQuartosOcupados: 0,
	verificarDisponibilidade: function () {
		return this.qtdQuartos - this.qtdQuartosOcupados;
	},
};

hotel.qtdQuartos = 10;
hotel.qtdQuartosOcupados = 8;

console.log("Quantidade de quartos disponíveis: " + hotel.verificarDisponibilidade());

// CLASSE E OBJETO
class Hotel {
	constructor(nome, qtdQuartos, qtdQuartosOcupados) {
		this.nome = nome;
		this.qtdQuartos = qtdQuartos;
		this.qtdQuartosOcupados = qtdQuartosOcupados;
	}
	verificarDisponibilidade() {
		return this.qtdQuartos - this.qtdQuartosOcupados;
	}
}

let hotelCharmoso = new Hotel("Hotel Charmoso", 20, 15);

console.log("Quantidade de quartos disponíveis: " + hotelCharmoso.verificarDisponibilidade());

console.log(hotelCharmoso.nome);
