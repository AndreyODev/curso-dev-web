function Hotel() {
	this.nome = "Hotel do Andrey";
	this.quantidadeSuites = 30;
	let suitesOcupadas = 25;

	this.reservar = function () {
		if (suitesOcupadas < this.quantidadeSuites) {
			suitesOcupadas++;
			console.log("Ocupados: " + suitesOcupadas);
		} else {
			console.log("Estamos lotados");
		}
	};

	this.dono = function () {
		console.log("O dono do hotel é " + this.nome);
	};
}

const hotel = new Hotel();
// typeof Hotel
hotel.nome = "Jefinho";
hotel.dono();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.suitesOcupadas;
