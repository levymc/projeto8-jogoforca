import { useState } from "react";

export default function Jogo(props) {
    let [jogoIniciado, setJogoIniciado] = useState(false)
    
    let [btnClicado, setBtnClicado] = useState(false);

    let funcBtn = () => {
        if (btnClicado === false){
            props.funcDisabled();
            props.funcRemoveSelecionado();
            setJogoIniciado(true)
            setBtnClicado(true)
        }
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