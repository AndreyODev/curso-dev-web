document.addEventListener("DOMContentLoaded", () => {
	const text = "< Olá, sou AndreyODev / >";
	const element = document.getElementById("title");

	let index = 0;
	const speed = 80;
	const delayBetweenLoops = 1500;

	function typeEffect() {
		if (index < text.length) {
			element.textContent += text.charAt(index);
			index++;
			setTimeout(typeEffect, speed);
		} else {
			setTimeout(() => {
				element.textContent = "";
				index = 0;
				typeEffect();
			}, delayBetweenLoops);
		}
	}

	typeEffect();
});

// MARCAR EM QUAL SEÇÃO ESTÁ
const sections = document.querySelectorAll("header, section, footer");
const desktopLinks = document.querySelectorAll(".navbar__links .nav__link");

const mobileLinks = document.querySelectorAll(".menu-mobile__links a");

const menuMobile = document.getElementById("menuMobile");
const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");

/* todos os links */
const allLinks = [...desktopLinks, ...mobileLinks];

/* FUNÇÃO PARA ATIVAR LINK */
function setActiveLink() {
	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 120;
		const sectionHeight = section.offsetHeight;

		if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
			current = section.getAttribute("id");
		}
	});

	allLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href") === `#${current}`) {
			link.classList.add("active");
		}
	});
}

window.addEventListener("scroll", setActiveLink);

/* MENU */
menuToggle.addEventListener("click", () => {
	menuMobile.classList.add("active");
	setActiveLink();
});

closeMenu.addEventListener("click", () => {
	menuMobile.classList.remove("active");
});

mobileLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuMobile.classList.remove("active");

		/* marca imediatamente */
		allLinks.forEach((l) => l.classList.remove("active"));
		link.classList.add("active");
	});
});
