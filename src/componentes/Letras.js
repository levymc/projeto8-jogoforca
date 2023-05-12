export default function Letras(props) {

  const btnLetra = (letra, index) => {
    props.funcSelecionar(index);
    props.errou();
    console.log(letra);
    console.log(props.arrayPalavra);
  
    const newArray = props.arrayUnderline.map((under, i) => props.arrayPalavra.includes(letra) ? "X" : under);
  
    props.setArrayUnderline(newArray);
  };

  return (
    <div className="divLetras flex">
      {props.alfabeto.map((letra, index) => (
        <button
          key={index}
          disabled={props.estadosBotoes[index].disabled}
          onClick={() => {btnLetra(letra, index)}}
          data-test="letter"
          className={`letra flex ${props.estadosBotoes[index].selecionado ? "selecionado" : ""}`}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
