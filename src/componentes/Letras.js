
let Letra = () => {

}

export default function Letras() {
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
    return (
      <div className="divLetras flex centerAll">
        {alfabeto.map((letra, index) => (
          <div key={index} className="letra">{letra}</div>
        ))}
      </div>
    );
  }
  