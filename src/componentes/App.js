import React, { useState } from "react";
import palavras from "../palavras"
import Jogo from "./Jogo";
import Letras from "./Letras";
import forca0 from "../img/forca0.png"
import forca1 from "../img/forca1.png"
import forca2 from "../img/forca2.png"
import forca3 from "../img/forca3.png"
import forca4 from "../img/forca4.png"
import forca5 from "../img/forca5.png"
import forca6 from "../img/forca6.png"


export default function App() {

  let embaralhar = () => {
    return palavras[Math.floor(Math.random() * palavras.length)]
  }

  const [palavraAleatoria] = useState(embaralhar);
  const arrayPalavra = palavraAleatoria.split('')
  const arrayUnderline = arrayPalavra.map(() => '_')

  const imgs = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  const [erros, setErros] = useState(0);
  const [imagemForca, setImagemForca] = useState(imgs[erros]);
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);
  const [gameOver, setGameOver] = useState(false)

  const [alfabeto] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  const [estadosBotoes, setEstadosBotoes] = useState(alfabeto.map((letra, index) => ({
    disabled: true,
    selecionado: true
  })));

  let funcSelecionar = (index) => {
    console.log(index, "aqui!")
    setEstadosBotoes((prevEstados) => {
      const novosEstados = [...prevEstados];
      novosEstados[index] = {
        ...novosEstados[index],
        selecionado: true,
        disabled: true
      };
      return novosEstados;
    });
  };

  let funcSelecionarTodos = () => {
    setEstadosBotoes((prevEstados) => {
      const novosEstados = prevEstados.map((estado) => ({
        ...estado,
        selecionado: !estado.selecionado,
        disabled: !estado.disabled
      }));
      return novosEstados;
    });
  };

  let errou = () => {
    setErros(erros + 1);
    if (erros === 5) {
      setErros(0);
      setImagemForca(forca6);
      // alert("Game Over !! ....");
      setGameOver(true)
    } else {
      setImagemForca(imgs[erros + 1]);
    }
    console.log(erros);
  };
  
  return (
    <div className="container flex">
      <Jogo image={imagemForca} 
            funcDisabled={() => {setBotaoDesabilitado(false)}} 
            underline={arrayUnderline} 
            funcSelecionarTodos={funcSelecionarTodos} 
            />
            <h2 class="over" >{gameOver && "GAME OVER!!!"}</h2>
      <Letras disabled={botaoDesabilitado} 
              alfabeto = {alfabeto}
              estadosBotoes = {estadosBotoes}
              funcSelecionar = {funcSelecionar}
              errou={errou} 
      />
    </div>
  );
}
