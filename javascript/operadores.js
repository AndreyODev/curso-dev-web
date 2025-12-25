// 1 - Operadores aritméticos
// 2 - Operadores de atribução
// 3 - Operadores de sequência
// 4 - Operadores de comparação
// 5 - Operadores condicional (Ternário
// 6 - Operadores lógicos

var valor1, valor2, total;

valor1 = 8;
valor2 = "8";

// total = --valor1;
// alert(total);

// valor1 += valor2;

// total = valor1 === valor2;
// total = valor1 !== "8";

// alert(total);
// alert("O valor 1 ficou: " + valor1);

var idade, eleitor, resultado;
idade = 20;
eleitor = idade < 18 ? "Não eleitor" : "Sim, eleitor";

// alert(eleitor + " " + "porque ele tem" + " " + idade + " " + "anos");

// resultado = idade > 18 && idade < 20;
// resultado = idade === 18 || idade === 20;
resultado = !(idade == 18);

alert(resultado);
