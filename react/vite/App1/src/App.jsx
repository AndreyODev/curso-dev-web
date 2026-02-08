// Aula 14 - Manipulando elementos de formulário
import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [carro, setCarro] = useState("");

  const handleChange = (e) => {
    setNome(e.target.value);
  };
  return (
    <>
      <label> Digite seu Nome: </label>
      <input type="text" name="fnome" value={nome} onChange={(e) => handleChange(e)} />

      <p>Nome digitado: {nome}</p>

      <label>Selecione um carro</label>
      <select value={carro} onChange={(e) => setCarro(e.target.value)}>
        <option value="HRV">HRV</option>
        <option value="GOLF">GOLF</option>
        <option value="CRUZE">CRUZE</option>
        <option value="Argo">Argo</option>
      </select>
      <input type="text" name="fcarro" value={carro} onChange={(e) => setCarro(e.target.value)} />

      <p>Carro selecionado: {carro}</p>
    </>
  );
}

// Aula 13 - Manipulando lista (array), usando o método map
//export default function App() {
//   const carros = ["HRV", "Golf", "BMW", "Focus", "Cruze", "Argo"];
//   const carros = [
//     {
//       categoria: "Esporte",
//       preco: "11000.00",
//       modelo: "Golf GTI",
//     },
//     {
//       categoria: "Esporte",
//       preco: "120000.00",
//       modelo: "Camaro",
//     },
//     {
//       categoria: "SUV",
//       preco: "85000.00",
//       modelo: "HRV",
//     },
//     {
//       categoria: "Utilitario",
//       preco: "120000.00",
//       modelo: "Hillux",
//     },
//   ];
//   const listaCarros = carros.map((carro, indice, array) => {
//     return (
//       /* <p>{JSON.stringify(carro)}</p> */
//       <li key={indice}>
//         {indice} - Modelo: {carro.modelo} - Categoria: {carro.categoria} - Preço: {carro.preco}
//       </li>
//     );
//   });

//   return (
//     <>
//       {/* <ul>{listaCarros[0]}</ul> */}
//       <ul>{listaCarros}</ul>
//     </>
//   );
// }

// Aula 12 - Renderização condicional
// import { useState } from "react";

// export default function App() {
//   const [cor, setCor] = useState(1);
//   const vermelho = { color: "#f00" };
//   const verde = { color: "#0f0" };
//   const azul = { color: "#00f" };

//   const retCor = (c) => {
//     if (c == 1) {
//       return vermelho;
//     } else if (c == 2) {
//       return verde;
//     } else if (c == 3) {
//       return azul;
//     }
//   };
//   const mudarCor = () => {
//     setCor((c) => (c >= 3 ? 1 : c + 1));
//   };
//   setInterval(mudarCor, 3000);
//   return (
//     <>
//       <h1 style={retCor(cor)}>AndreyODev </h1>
//       <button
//         onClick={() => {
//           mudarCor();
//         }}
//       >
//         Mudar Cor
//       </button>
//     </>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [log, setLog] = useState(false);
//   const msgLogin = () => {
//     return "Usuario Logado";
//   };
//   const msgLogout = () => {
//     return "Favor Logar";
//   };

//   const cumprimento = () => {
//     const hora = new Date().getHours();
//     if (hora >= 0 && hora < 13) {
//       return <p>Bom dia</p>;
//     } else if (hora >= 13 && hora < 18) {
//       return <p>Boa tarde</p>;
//     } else {
//       return <p>Boa noite</p>;
//     }
//   };
//   return (
//     <>
//       {cumprimento()}
//       <p>{log ? msgLogin() : msgLogout()}</p>
//       <button
//         onClick={() => {
//           setLog(!log);
//         }}
//       >
//         {log ? "Logout" : "Login"}
//       </button>
//     </>
//   );
// }

// Aula 11 - Eventos
// import { useState } from "react";
// import Led from "./components/Led";

// export default function App() {
//   const [ligado, setLigado] = useState(false);

//   const cancelar = (obj) => {
//     return obj.preventDefault();
//   };

//   return (
//     <>
//       <Led ligado={ligado} setLigado={setLigado} />
//       <a
//         style={{
//           border: "1px solid blue",
//           margin: "0 20px",
//           padding: "5px 10px",
//           textDecoration: "none",
//           color: "#fff",
//           borderRadius: "5px",
//           background: "blue",
//         }}
//         href="https://github.com/AndreyODev"
//         target="_blank"
//         onClick={(e) => {
//           cancelar(e);
//         }}
//       >
//         AndreyODev
//       </a>
//     </>
//   );
// }

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
