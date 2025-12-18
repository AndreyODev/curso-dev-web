document.addEventListener("DOMContentLoaded", () => {
	const text = "< Olá, sou AndreyODev >";
	const element = document.getElementById("title");

	let index = 0;
	const speed = 80;
	const delayBetweenLoops = 1500; // pausa antes de recomeçar

	function typeEffect() {
		if (index < text.length) {
			element.textContent += text.charAt(index);
			index++;
			setTimeout(typeEffect, speed);
		} else {
			setTimeout(() => {
				element.textContent = ""; // limpa
				index = 0; // reseta
				typeEffect(); // recomeça
			}, delayBetweenLoops);
		}
	}

	typeEffect();
});
