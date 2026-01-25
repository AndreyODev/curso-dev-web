import React from "react";
import Dados from "./Dados.js";

function Corpo() {
	function github() {
		return "andreyODev função";
	}
	const n1 = 7;
	const n2 = 13;
	const somar = (v1, v2) => {
		return v1 + v2;
	};

	return (
		<section>
			<h2>Curso de React</h2>
			<p>Muito da hora a criação com o react</p>
			<Dados github={github()} instagram="@andrey.olliveira teste" somar={somar(n1, n2)} n1={n1} n2={n2} />
		</section>
	);
}
export default Corpo;
