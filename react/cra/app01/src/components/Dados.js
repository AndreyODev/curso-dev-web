import React from "react";

function Dados(props) {
	return (
		<section>
			<p>GitHub: {props.github}</p>
			<p>Instagram: {props.instagram}</p>
			<p>
				A soma de {props.n1} + {props.n2} é {props.somar}
			</p>
		</section>
	);
}

export default Dados;
