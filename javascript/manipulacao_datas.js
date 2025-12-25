// COMANDO BASE PARA PEGAR A DATA
let data = new Date();
console.log(data);

// ANO ATUAL
let ano = data.getFullYear();
console.log(ano);

// MÊS ATUAL - PEGA SEMPRE DE 0 A 11
let mes = data.getMonth();

const mes_atual = mes + 1;
console.log(mes_atual);

// FORMA DE MOSTRAR O MÊS
const mesDoAno = [
	"Janeiro",
	"Feveiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];
console.log(mesDoAno[mes]);

// DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

// DIA DA SEMANA - 0 - 6
let diaSemana = data.getDay();
console.log(diaSemana);
const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

let diaDaSemanaEscrito = diaDaSemana[diaSemana];
// console.log(diaDaSemana[diaSemana]);
console.log(diaDaSemanaEscrito);

// PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora);

// PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos);

// PEGAR OS SEGUNDO - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

// PEGAR OS MILISEGUNDOS - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// PEGAR A DATA NO PADRÃO BRIASILEIRO -  DIA / MÊS / ANO
let dataBR = data.toLocaleDateString("pt-br");
console.log(dataBR);

// COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date("2025, 01, 15");

if (hoje > vencimento) {
	console.log("Sua conta está vencida!");
} else {
	console.log("Ainda não venceu, tudo certo!");
}

// DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date("2022, 12, 31");

var diferencaTempo = dataInicial.getTime() - dataFinal.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias);
