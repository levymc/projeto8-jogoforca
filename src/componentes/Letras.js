import { useState } from "react";

export default function Letras(props) {
  const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const [estadosBotoes, setEstadosBotoes] = useState(alfabeto.map(() => ({
    disabled: false,
    selecionado: props.classeSelecionado
  })));

  const btnLetra = (index) => {
    console.log(props.classeSelecionado)
    props.addSelecinado();
    props.errou();
    console.log(props.classeSelecionado)
    setEstadosBotoes(prevEstados => {
      const novosEstados = [...prevEstados];
      novosEstados[index] = {
        ...prevEstados[index],
        disabled: true,
        selecionado: props.classeSelecionado
      };
      return novosEstados;
    });
  };

  return (
    <div className="divLetras flex">
      {alfabeto.map((letra, index) => (
        <button
          key={index}
          disabled={estadosBotoes[index].disabled}
          onClick={() => btnLetra(index)}
          data-test="letter"
          className={`letra flex ${props.classeSelecionado}`}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
