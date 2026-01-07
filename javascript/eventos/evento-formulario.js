function executar() {
	console.log("Executar");
}
function submit(event) {
	console.log(event);
	event.preventDefault();
}

const form = document.formulario;
const entrada = form.entrada;

// entrada.addEventListener("input", executar);
// entrada.addEventListener("cut", executar);
// entrada.addEventListener("copy", executar);
// entrada.addEventListener("paste", executar);
// entrada.addEventListener("select", executar);

const selecao = form.selecao;
selecao.addEventListener("change", executar);

const radio = form.idade;
radio[0].addEventListener("change", executar);
radio[1].addEventListener("change", executar);

const checkbox = form.termo;
checkbox.addEventListener("change", executar);

// form.addEventListener("submit", submit);
form.addEventListener("reset", executar);
