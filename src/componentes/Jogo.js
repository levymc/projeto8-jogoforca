
export default function Jogo(props) {
    return (
      <>
        <div className="divJogo flex">
            <img src={props.image} alt="Imagem 0" />
            <div className="divBtn flex">
                <button>Escolher Palavra</button>    
            </div>
        </div>
        
      </>
    );
}