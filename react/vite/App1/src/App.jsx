// Aula 11 - Eventos
import { useState } from "react";
import Led from "./components/Led";

export default function App() {
  const [ligado, setLigado] = useState(false);

  const cancelar = (obj) => {
    return obj.preventDefault();
  };

  return (
    <>
      <Led ligado={ligado} setLigado={setLigado} />
      <a
        style={{
          border: "1px solid blue",
          margin: "0 20px",
          padding: "5px 10px",
          textDecoration: "none",
          color: "#fff",
          borderRadius: "5px",
          background: "blue",
        }}
        href="https://github.com/AndreyODev"
        target="_blank"
        onClick={(e) => {
          cancelar(e);
        }}
      >
        AndreyODev
      </a>
    </>
  );
}

// Aula 10 - Usando useState
// import { useState } from "react";
// import "./App.css";
// import Numero from "./components/Numero";

// export default function App() {
//   const [numero, setNumero] = useState(10);
//   return (
//     <>
//       <p>Valor do state: {numero}</p>
//       <button
//         onClick={() => {
//           setNumero(numero + 1);
//         }}
//       >
//         Clique
//       </button>

//       <Numero numero={numero} setNumero={setNumero} />
//     </>
//   );
// }

// Aula 8 a 9
// import React from "react";
// import "./App.css";
// import Relogio from "./components/Relogio";

// function App() {
//   const textoDestaque = {
//     color: "#00f",
//     fontSize: "3rem",
//   };
//   return (
//     <>
//       <section className="container">
//         <Relogio />
//         <h1 style={{ color: "#00f", fontSize: "5rem" }}>AndreyODev</h1>
//         <h2 style={textoDestaque}>Curso de React</h2>
//         <p className="texto">Estou gostando de estudar React</p>
//         <a href="https://www.google.com/" target="_blank">
//           Google
//         </a>
//       </section>
//     </>
//   );
// }

// export default App;

// Aula 1 até 7
// import React from "react";
// import Foto from "./assets/img/eu2.jpeg";

// import Header from "./components/Header.jsx";
// import Corpo from "./components/Corpo.jsx";
// import Dados from "./components/Dados.jsx";

// function App() {
//   const github = "andreyODev const";
//   const instagram = "andrey.olliveira const";
//   // const instagram = () => {
//   //   return "@andreyolliveira";
//   // };
//   // const github = "AndreyODev";
//   // const curso = "Curso de React";
//   return (
//     // <section>
//     //   <p>AndreyODev</p>
//     //   <p>Curso de React</p>
//     //   <p>GitHub: {github}</p>
//     //   <p>{"GitHub: " + github}</p>
//     //   <p>Instragram: {instagram()}</p>
//     //   <p>{curso}</p>
//     //   <img src={Foto} alt="Minha foto" />
//     //   <img src="./public/indian.png" alt="Moto" />
//     // </section>

//     <>
//       <Header />
//       <Corpo />
//       <Dados github="andreyODev" instagram="@andrey.olliveira" />
//       <Dados github={github} instagram={instagram} />
//     </>
//   );
// }

// export default App;
