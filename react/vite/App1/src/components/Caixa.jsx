export default function Caixa(props) {
  return (
    <>
      <p>Link do git hub: {props.site}</p>
      {props.children}
    </>
  );
}

// export default function Caixa({ children }) {
//   return (
//     <>
//       <h1>Andrey</h1>
//       {children[1]}
//     </>
//   );
// }
