const carro = {
	marca: "Fiat",
	modelo: "Uno",
	ano: 2001,
};
// CONVERTENDO PARA TEXTO(TEXTO)
let texto = JSON.stringify(carro);
document.getElementById("area").innerHTML = texto;

// CONVERTENDO TEXTO PARA OBJETO
let obj = JSON.parse(texto);
// PEGANDO UM VALOR DESTE OBJETO
console.log(obj.marca);

localStorage.setItem("carro", texto);
localStorage.setItem("carro2", texto);
localStorage.removeItem("usuario", texto);
localStorage.clear("usuario", texto);

// const ajax = new XMLHttpRequest();
// ajax.open("GET", "https://viacep.com.br/ws/28995370/json/");
// ajax.send();
// ajax.onload = function () {
// 	document.getElementById("area").innerHTML = this.responseText;
// };
