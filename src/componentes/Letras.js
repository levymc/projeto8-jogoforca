import { useState } from "react";

export default function Letras(props) {
  

  const btnLetra = (index) => {
    console.log(props.classeSelecionado)
    // props.funcSelecionar();
    props.errou();
   
  };

  // console.log(props.classeSelecionado)
  // setEstadosBotoes(prevEstados => {
  //   const novosEstados = [...prevEstados];
  //   novosEstados[index] = {
  //     ...prevEstados[index],
  //     disabled: true,
  //     selecionado: props.classeSelecionado
  //   };
  //   return novosEstados;
  // });


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
