const cards = document.querySelectorAll(".projects__card");
const btnNext = document.querySelector(".arrow-right");
const btnPrev = document.querySelector(".arrow-left");
const progressContainer = document.querySelector(".carousel-progress");

// ===== ESTADO =====
let indice = 0;
let cardsPorSlide = 3;
let intervalo;

// ===== DEFINE QUANTOS CARDS FICAM VISÍVEIS =====
function atualizarQuantidade() {
	if (window.innerWidth <= 480) {
		cardsPorSlide = 1;
	} else if (window.innerWidth <= 909) {
		cardsPorSlide = 2;
	} else {
		cardsPorSlide = 3;
	}
}

// ===== CRIA AS BARRAS =====
function criarBarras() {
	progressContainer.innerHTML = "";

	const totalSteps = cards.length - cardsPorSlide + 1;

	for (let i = 0; i < totalSteps; i++) {
		const bar = document.createElement("div");
		bar.classList.add("progress-bar");
		if (i === indice) bar.classList.add("active");
		progressContainer.appendChild(bar);
	}
}

// ===== ATUALIZA BARRA ATIVA =====
function atualizarBarras() {
	const bars = document.querySelectorAll(".progress-bar");
	bars.forEach((bar) => bar.classList.remove("active"));
	if (bars[indice]) bars[indice].classList.add("active");
}

// ===== RENDER =====
function render() {
	cards.forEach((card) => (card.style.display = "none"));

	for (let i = indice; i < indice + cardsPorSlide; i++) {
		if (cards[i]) cards[i].style.display = "flex";
	}

	atualizarBarras();
}

// ===== NEXT =====
btnNext.addEventListener("click", () => {
	indice++;

	if (indice > cards.length - cardsPorSlide) {
		indice = 0;
	}

	render();
	resetInterval();
});

// ===== PREV =====
btnPrev.addEventListener("click", () => {
	indice--;

	if (indice < 0) {
		indice = cards.length - cardsPorSlide;
	}

	render();
	resetInterval();
});

// ===== AUTOPLAY =====
function iniciarIntervalo() {
	intervalo = setInterval(() => {
		indice++;

		if (indice > cards.length - cardsPorSlide) {
			indice = 0;
		}

		render();
	}, 4000);
}

function resetInterval() {
	clearInterval(intervalo);
	iniciarIntervalo();
}

// ===== RESIZE =====
window.addEventListener("resize", () => {
	atualizarQuantidade();
	indice = 0;
	criarBarras();
	render();
});

// ===== INIT =====
atualizarQuantidade();
criarBarras();
render();
iniciarIntervalo();
