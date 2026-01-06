const img = document.querySelector("#img");
let atributo = "src";
console.log(img.getAttribute(atributo));
console.log(img["src"]);
console.log(img.src);

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	img.src = "img/grafico.png";
	const link = document.getElementById("link");
	// link.href = "https://www.bing.com";
	link.setAttribute("href", "https://www.bing.com");
	console.log(link.href);
});
