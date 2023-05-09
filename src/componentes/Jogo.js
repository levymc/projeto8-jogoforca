
export default function Jogo(props) {
    return (
      <>
        <div className="divJogo flex">
            <img src={props.image} alt="Imagem 0" />
            <div className="divBtn flex">
                <button onClick={props.errou}>Escolher Palavra</button>    
            </div>
        </div>
        
      </>
    );
}