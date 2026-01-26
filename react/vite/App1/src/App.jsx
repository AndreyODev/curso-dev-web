// Aula 8
import React from "react";
import "./App.css";

function App() {
  const textoDestaque = {
    color: "#00f",
    fontSize: "3rem",
  };
  return (
    <>
      <section className="container">
        <h1 style={{ color: "#00f", fontSize: "5rem" }}>AndreyODev</h1>
        <h2 style={textoDestaque}>Curso de React</h2>
        <p className="texto">Estou gostando de estudar React</p>
        <a href="https://www.google.com/" target="_blank">
          Google
        </a>
      </section>
    </>
  );
}

export default App;

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
