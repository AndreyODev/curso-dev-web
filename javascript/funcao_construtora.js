// FUNÇÕES CONSTRUTORA
// class Hotel{

// }

// MODO 1
// const Hotel = function() {
//   this.nome = "Hotel do Andrey",
//   this.quantidadeSuites = 30,
//   this.suiteOcupadas = 25
//   this.reservar = function(){
//      this.suitesOcupadas++
//   }
// }

// MODO 2
function Hotel() {
	(this.nome = "Hotel do Andrey"),
		(this.quantidadeSuites = 30),
		(this.suitesOcupadas = 25),
		(this.reservar = function () {
			this.suitesOcupadas++;
			console.log("Ocupadas: " + this.suitesOcupadas);
		});

	this.dono = function () {
		console.log("O dono do hotel é " + this.nome);
	};
}

const hotel = new Hotel();
// typeof Hotel
hotel.reservar();
hotel.reservar();
hotel.nome = "Jefinho";
hotel.dono();
hotel.reservar();
