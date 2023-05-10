import { useState } from "react";

export default function Letras(props) {
  const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const [estadosBotoes, setEstadosBotoes] = useState(alfabeto.map(() => ({
    disabled: false,
    selecionado: true
  })));

  const btnLetra = (index) => {
    setEstadosBotoes(prevEstados => {
      const novosEstados = [...prevEstados];
      novosEstados[index] = {
        ...prevEstados[index],
        disabled: true,
        selecionado: true
      };
      return novosEstados;
    });
    console.log("oii");
  };

  return (
    <div className="divLetras flex">
      {alfabeto.map((letra, index) => (
        <button
          key={index}
          disabled={estadosBotoes[index].disabled}
          onClick={() => btnLetra(index)}
          data-test="letter"
          className={`letra flex ${props.classeSelecionado ? 'selecionado' : ''}`}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
