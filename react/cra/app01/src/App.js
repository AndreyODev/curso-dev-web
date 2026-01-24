// import React from "react";
import Foto from "./assets/img/eu2.jpeg";

function App() {
	const instagram = () => {
		return "@andreyolliveira";
	};
	const github = "AndreyODev";
	const curso = "Curso de React";
	return (
		<section>
			{/* <p>AndreyODev</p>
      <p>Curso de React</p> */}
			{/* <p>GitHub: {github}</p> */}
			<p>{"GitHub: " + github}</p>
			<p>Instragram: {instagram()}</p>
			<p>{curso}</p>
			<img src={Foto} alt="Minha foto" />
			<img src="indian.png" alt="Moto" />
		</section>
	);
}

export default App;

// import React from "react";

// export default function App() {
//   return (
//     <>
//       <p>AndreyODev</p>
//     </>
//   );
// }
