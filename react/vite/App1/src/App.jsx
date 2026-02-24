// Aula 19 - UseEffect
import { useEffect, useState } from "react";

export default function App() {
  const [contagem, setContagem] = useState(0);

  useEffect(() => {
    console.log("Página carregada");
    document.title = "Contagem: " + contagem;
  });
  return (
    <>
      <p>Contagem: {contagem}</p>
      <button
        onClick={() => {
          setContagem(contagem + 1);
        }}
      >
        Contar
      </button>
    </>
  );
}

// Aula 17 - CONTENÇÃO
// import Caixa from "./components/Caixa";
// import GitHub from "./components/GitHub";

// export default function App() {
//   return (
//     <>
//       <Caixa site="https://github.com/AndreyODev">
//         <p>Curso de React</p>
//       </Caixa>

//       <GitHub>
//         <h2>AndreyODev</h2>
//       </GitHub>
//     </>
//   );
// }

// // Aula 16 - Elevação de State
// import { useState } from "react";
// import Nota from "./components/Nota";
// import Resultado from "./components/Resultado";

// export default function App() {
//   const [notas, setNotas] = useState({ nota1: "0", nota2: "0", nota3: "0", nota4: "0" });

//   const handleSetNotas = (e) => {
//     if (e.target.getAttribute("name") == "nota1") {
//       setNotas({ ...notas, nota1: e.target.value });
//     } else if (e.target.getAttribute("name") == "nota2") {
//       setNotas({ ...notas, nota2: e.target.value });
//     } else if (e.target.getAttribute("name") == "nota3") {
//       setNotas({ ...notas, nota3: e.target.value });
//     } else if (e.target.getAttribute("name") == "nota4") {
//       setNotas({ ...notas, nota4: e.target.value });
//     }
//   };

//   // const [nota1, setNota1] = useState(0);
//   // const [nota2, setNota2] = useState(0);
//   // const [nota3, setNota3] = useState(0);
//   // const [nota4, setNota4] = useState(0);
//   return (
//     <>
//       <Nota num={1} name="nota1" nota={notas.nota1} setNota={handleSetNotas} />
//       <Nota num={2} name="nota2" nota={notas.nota2} setNota={handleSetNotas} />
//       <Nota num={3} name="nota3" nota={notas.nota3} setNota={handleSetNotas} />
//       <Nota num={4} name="nota4" nota={notas.nota4} setNota={handleSetNotas} />
//       <Resultado
//         somaNotas={
//           parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)
//         }
//       />
//     </>
//   );
// }

// Aula 15 - Manipulando objetos usando apenas um state
// import { useState } from "react";

// export default function App() {
//   const [form, setForm] = useState({ nome: "", curso: "", ano: "" });
//   const handleFormChange = (e) => {
//     if (e.target.getAttribute("name") == "fnome") {
//       setForm({ nome: e.target.value, curso: form.curso, ano: form.ano });
//     } else if (e.target.getAttribute("name") == "fcurso") {
//       setForm({ nome: form.nome, curso: e.target.value, ano: form.ano });
//     } else if (e.target.getAttribute("name") == "fano") {
//       setForm({ nome: form.nome, curso: form.curso, ano: e.target.value });
//     }
//   };

//   return (
//     <>
//       <label>Nome </label>
//       <input type="text" name="fnome" value={form.nome} onChange={(e) => handleFormChange(e)} />
//       <br />
//       <label>Curso </label>
//       <input type="text" name="fcurso" value={form.curso} onChange={(e) => handleFormChange(e)} />
//       <br />
//       <label>Ano </label>
//       <input type="text" name="fano" value={form.ano} onChange={(e) => handleFormChange(e)} />
//       <br />

//       <p>Nome digitado: {form.nome}</p>
//       <p>Curso digitado: {form.curso}</p>
//       <p>Ano digitado: {form.ano}</p>
//     </>
//   );
// }

// Aula 14 - Manipulando elementos de formulário
// import { useState } from "react";

// export default function App() {
//   const [nome, setNome] = useState("");
//   const [carro, setCarro] = useState("");

//   const handleChange = (e) => {
//     setNome(e.target.value);
//   };
//   return (
//     <>
//       <label> Digite seu Nome: </label>
//       <input type="text" name="fnome" value={nome} onChange={(e) => handleChange(e)} />

//       <p>Nome digitado: {nome}</p>

//       <label>Selecione um carro</label>
//       <select value={carro} onChange={(e) => setCarro(e.target.value)}>
//         <option value="HRV">HRV</option>
//         <option value="GOLF">GOLF</option>
//         <option value="CRUZE">CRUZE</option>
//         <option value="Argo">Argo</option>
//       </select>
//       <input type="text" name="fcarro" value={carro} onChange={(e) => setCarro(e.target.value)} />

//       <p>Carro selecionado: {carro}</p>
//     </>
//   );
// }

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
