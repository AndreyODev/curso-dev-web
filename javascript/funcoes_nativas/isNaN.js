// PARÂMETROS OPCIONAIS
function calcularSalario(salario, desconto) {
	salario = isNaN(salario) ? 0 : salario;
	desconto = isNaN(desconto) ? 0 : desconto;
	return salario - desconto;
}

let resultado = calcularSalario(100);
console.log(resultado);
