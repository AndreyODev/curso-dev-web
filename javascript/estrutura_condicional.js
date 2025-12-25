// var interruptor = "on";

// if (interruptor == "off") {
// 	alert("A lampada está ligada");
// } else {
// 	alert("A lampada está desligada");
// }

// var hora = new Date().getHours();

// alert(hora);

// if (hora < 12) {
//   alert("Bom dia");
// } else if (hora < 18) {
//   alert("Boa tarde");
// } else {
//   alert("Boa noite");
// }

function verificar() {
	let nome = document.getElementById("nome").value;

	if (nome == "" || nome == null) {
		const p = document.getElementById("texto");
		p.innerHTML = "O campo não pode ser vazio";
		p.style.color = "red";
	} else {
		const p = document.getElementById("texto");
		p.innerHTML = "Tudo certinho";
		p.style.color = "green";
	}
}
