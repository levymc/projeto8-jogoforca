export default function Letras(props) {
  const btnLetra = (letra, index) => {
    props.funcSelecionar(index);

    console.log(letra);
    console.log(props.arrayPalavra);

    if (!props.arrayPalavra.includes(letra)) {
      props.errou();
    }

    const newArray = props.arrayUnderline.map((under, i) => {
      if (props.arrayPalavra[i] === letra) {
        return `${letra}`;
      } else {
        return under;
      }
    });

    props.setArrayUnderline(newArray);

    if (newArray.indexOf('_') === -1) {
      props.desabilitarTodos();
    }
  };

  return (
    <div className="divLetras flex">
      {props.alfabeto.map((letra, index) => (
        <button
          key={index}
          disabled={props.estadosBotoes[index].disabled}
          onClick={() => {
            btnLetra(letra, index);
          }}
          data-test="letter"
          className={`letra flex ${
            props.estadosBotoes[index].selecionado ? "selecionado" : ""
          }`}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
