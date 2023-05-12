export default function Letras(props) {

  const btnLetra = (index) => {
    console.log("IOioas")
    props.funcSelecionar(index);
    props.errou();
  };

  return (
    <div className="divLetras flex">
      {props.alfabeto.map((letra, index) => (
        <button
          key={index}
          disabled={props.estadosBotoes[index].disabled}
          onClick={() => btnLetra(index)}
          data-test="letter"
          className={`letra flex ${props.estadosBotoes[index].selecionado ? "selecionado" : ""}`}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
