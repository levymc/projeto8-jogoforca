import { useState } from "react";

export default function Jogo(props) {
    
    
    let funcBtn = () => {
        if (props.jogoIniciado === false || props.venceu){
            props.funcDisabled();
            props.funcSelecionarTodos();
            props.setJogoIniciado(true)
            if (props.venceu || props.gameOver){
                props.setGameOver(false)
                props.setImagemForca(props.imgs[0])
                props.setMsgVenceu(false)
                props.setPalavraAleatoria(props.embaralhar())
                const arrayPalavra = props.palavraAleatoria.split('')
                props.setArrayUnderline([])
                props.setArrayUnderline(arrayPalavra.map(() => '_'))
            }
        }
    }

    return (
      <>
        <div className="divJogo flex">
            <img className="imagemForca" key={props.image} src={props.image} data-test="game-image" alt="Imagem da Forca" />
            <div className="divBtn flex">
                <button onClick={funcBtn} data-test="choose-word" >Escolher Palavra</button>    
                <div data-test="word" className="divPalavra flex">
                    {props.jogoIniciado && props.underline.map((_, index) => (
                        <div className="underline" key={index}>
                            {_}
                        </div>
                    )) || props.gameOver && props.arrayPalavra.map((letra, index) => (
                        <div className="palavraPerdeu" key={index}>
                            {letra}
                        </div>
                    )) || props.venceu && props.arrayPalavra.map((letra, index) => (
                        <div className="palavraGanhou" key={index}>
                            {letra}
                        </div>
                    ))
                    }
                    </div>
            </div>
        </div>
        
      </>
    );
}