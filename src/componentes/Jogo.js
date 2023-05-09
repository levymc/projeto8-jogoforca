
let Forca = () => {
    const forca0 = process.env.PUBLIC_URL + '/assets/forca0.png';

    return (
        <img src={forca0} alt="Imagem 0" />
    );
}

let BtnJogar = () => {
    return (
        <button>Escolher Palavra</button>
    )
}

export default function Jogo() {
    return (
      <>
        <div className="divJogo flex">
            <Forca />  
            <div className="divBtn flex"><BtnJogar /> </div>
        </div>
        
      </>
    );
}
  


  