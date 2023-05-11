import { useState } from "react";
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
  const [classeSelecionado, setClasseSelecionado] = useState("selecionado");

  let removerDisabled = () => {
    setBotaoDesabilitado(false);
  };

  let removerSelecinado = () => {
    setClasseSelecionado("");
  };

  let addSelecinado = () => {
    setClasseSelecionado("selecionado");
  };
  

  let errou = () => {
    setErros(erros + 1);
    if(erros === 7){
      alert("Game Over !! ....")
      setErros(0)
    }else{
      setImagemForca(imgs[erros]);
    }
    console.log(erros)
  }

  return (
    <div className="container flex">
      <Jogo image={imagemForca} 
            errou={errou} 
            funcDisabled={removerDisabled} 
            underline={arrayUnderline} 
            funcRemoveSelecionado={removerSelecinado} 
            />
      <Letras disabled={botaoDesabilitado} 
              classeSelecionado={classeSelecionado}
              addSelecinado={addSelecinado}
      />
    </div>
  );
}
