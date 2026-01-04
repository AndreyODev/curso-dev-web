const obj = document.getElementById("destaque");
const obj2 = document.querySelector("li.primeiro");

console.log(obj.textContent);
console.log(obj2.textContent);

const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
// 	obj2.innerHTML = `<li class="primeiro">teste</li>`;
// });

function mudarConteudo() {
	obj2.innerHTML = `<li class="primeiro">teste</li>`;
	obj2.classList.add("destaque");
}
console.log(btn);
