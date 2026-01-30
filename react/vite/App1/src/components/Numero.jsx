import { useState } from "react";
import "../App.jsx";

export default function Numero(props) {
  return (
    <>
      <p>Valor do state: {props.numero}</p>

      <button
        onClick={() => {
          props.setNumero(props.numero + 10);
        }}
      >
        Valor de 10 em 10
      </button>
    </>
  );
}
