function processar(callBackSucesso, callBackErro) {
	/*
  Ações
  ...........
  */
	let resultadoProcessamento = false;
	if (resultadoProcessamento) {
		callBackSucesso();
	} else {
		callBackErro();
	}
}

const salvarResultado = function () {
	/*
  ..........
  */
	console.log("Salvar resultado");
};

salvarResultado();

const erro = function () {
	/*
  ..........
  */
	console.log("Erro");
};

processar(salvarResultado, erro);
