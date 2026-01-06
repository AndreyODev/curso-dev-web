function executar() {
	const obj = document.querySelector("span");
	const classes = obj.classList;

	// console.log(classes);
	// console.log(classes.contains("vermelho"));
	// classes.add("vermelho", "texto");
	// classes.remove("vermelho");
	// classes.toggle("vermelho");
	obj.className = "vermelho texto";
	classes.forEach((item) => {
		console.log(item);
	});
}
