// Aula 11
import LedVerde from "../assets/img/led-verde.png";
import LedVermelho from "../assets/img/led-vermelho.png";

export default function Led(props) {
  return (
    <>
      <img style={{ width: "300px", margin: "20px" }} src={props.ligado ? LedVerde : LedVermelho} />
      <button
        onClick={() => {
          props.setLigado(true);
        }}
      >
        Ligar
      </button>
      <button
        onClick={() => {
          props.setLigado(false);
        }}
      >
        Desligar
      </button>
    </>
  );
}
