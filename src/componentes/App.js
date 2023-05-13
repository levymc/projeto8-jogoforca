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

  const [palavraAleatoria, setPalavraAleatoria] = useState(embaralhar);
  const arrayPalavra = palavraAleatoria.split('')
  const [arrayUnderline, setArrayUnderline] = useState(arrayPalavra.map(() => '_'))

  const imgs = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  const [erros, setErros] = useState(0);
  const [imagemForca, setImagemForca] = useState(imgs[erros]);
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);
  const [gameOver, setGameOver] = useState(false)
  const [msgVenceu, setMsgVenceu] = useState(false)

  const [alfabeto] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  const alfabetoMinusculo = alfabeto.map(letra => letra.toLowerCase());

  const [estadosBotoes, setEstadosBotoes] = useState(alfabeto.map((letra, index) => ({
    disabled: true,
    selecionado: true
  })));

  const [venceu, setVenceu] = useState(false)

  let funcSelecionar = (index) => {
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

  let desabilitarTodos = () => {
    setEstadosBotoes((prevEstados) => {
      const novosEstados = prevEstados.map((estado) => ({
        ...estado,
        selecionado: true,
        disabled: true
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
            arrayPalavra = {arrayPalavra}
            funcSelecionarTodos={funcSelecionarTodos} 
            setPalavraAleatoria = {setPalavraAleatoria}
            setErros = {setErros}
            setEstadosBotoes = {setEstadosBotoes}
            venceu = {venceu}
            />
            <h2 className="over" >{gameOver && "GAME OVER!!!"}</h2>
            <h2 className="overVenceu" >{msgVenceu && "Venceu!!!!"}</h2>
      <Letras disabled={botaoDesabilitado} 
              alfabeto = {alfabetoMinusculo}
              estadosBotoes = {estadosBotoes}
              funcSelecionar = {funcSelecionar}
              setEstadosBotoes = {setEstadosBotoes}
              desabilitarTodos = {desabilitarTodos}
              errou={errou} 
              setErros = {setErros}
              arrayUnderline = {arrayUnderline}
              setArrayUnderline={setArrayUnderline} 
              arrayPalavra = {arrayPalavra}
              setVenceu = {setVenceu}
              setMsgVenceu = {setMsgVenceu}
              setImagemForca = {setImagemForca}
              img0 = {imgs[0]}
      />
    </div>
  );
}
