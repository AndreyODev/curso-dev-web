export default function Nota(props) {
  return (
    <div>
      <label>Informe a nota: {props.num}</label>
      <br />
      <input
        type="text"
        name={props.name}
        value={props.nota}
        onChange={props.setNota}
        /*onChange={(e) => props.setNota(e.target.value)}*/
      />
    </div>
  );
}
