import { useState } from "react";

export default function Jogo(props) {
    let [jogoIniciado, setJogoIniciado] = useState(false)

    let funcBtn = () => {
        props.funcDisabled();
        props.errou();
        props.funcRemoveSelecionado();
        setJogoIniciado(true)
    }

    return (
      <>
        <div className="divJogo flex">
            <img className="imagemForca" key={props.image} src={props.image} data-test="game-image" alt="Image" />
            <div className="divBtn flex">
                <button onClick={funcBtn} data-test="choose-word" >Escolher Palavra</button>    
                <div data-test="word" className="divPalavra flex">
                    {jogoIniciado && props.underline.map((_, index) => (
                        <div className="underline" key={index}>
                        {_}
                        </div>
                    ))}
                    </div>
            </div>
        </div>
        
      </>
    );
}