
export default function Jogo(props) {

    let funcBtn = () => {
        props.funcDisabled();
        props.errou();
    }

    return (
      <>
        <div className="divJogo flex">
            <img className="imagemForca" key={props.image} src={props.image} alt="Imagem 0" />
            <div className="divBtn flex">
                <button onClick={funcBtn}>Escolher Palavra</button>    
            </div>
        </div>
        
      </>
    );
}