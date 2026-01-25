// import React from "react";
// import Foto from "./assets/img/eu2.jpeg";

import Header from "./components/Header.js";
import Corpo from "./components/Corpo.js";
import Dados from "./components/Dados.js";

function App() {
	const github = "andreyODev const";
	const instagram = "andrey.olliveira const";
	// const instagram = () => {
	//   return "@andreyolliveira";
	// };
	// const github = "AndreyODev";
	// const curso = "Curso de React";
	return (
		// <section>
		//   <p>AndreyODev</p>
		//   <p>Curso de React</p>
		//   <p>GitHub: {github}</p>
		//   <p>{"GitHub: " + github}</p>
		//   <p>Instragram: {instagram()}</p>
		//   <p>{curso}</p>
		//   <img src={Foto} alt="Minha foto" />
		//   <img src="./public/indian.png" alt="Moto" />
		// </section>

		<>
			<Header />
			<Corpo />
			<Dados github="andreyODev" instagram="@andrey.olliveira" />
			<Dados github={github} instagram={instagram} />
		</>
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
