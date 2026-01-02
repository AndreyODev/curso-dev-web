// DATA
const data = new Date();
// data.toString()

// let dia = data.getDate()
// console.log(dia)

// let mes = data.getMonth() + 1
// console.log(mes)

// let ano = data.getFullYear()
// console.log(ano)

// console.log(`data: ${dia}/${mes}/${ano}`)

// let hora = data.getHours()
// console.log(hora)

// let minuto = data.getMinutes()
// console.log(minuto)

// let segundos = data.getSeconds()
// console.log(segundos)

// console.log(`Hora: ${hora}:${minuto}:${segundos}`)

// Operações com datas
// data.setDate(data.getDate() + 358)

// data.setMonth(data.getMonth() + 12)

// data.setFullYear(data.getFullYear() + 3)

// console.log(`data: ${dia}/${mes}/${ano}`)

data.setHours(data.getHours() + 2);
let hora = data.getHours();
console.log(hora);

let minuto = data.getMinutes();
console.log(minuto);

let segundos = data.getSeconds();
console.log(segundos);

console.log(`Hora: ${hora}:${minuto}:${segundos}`);
