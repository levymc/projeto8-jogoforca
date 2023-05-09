
export default function Letras(props) {
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
    return (
      <div className="divLetras flex">
        {alfabeto.map((letra, index) => (
          <button key={index} disabled={props.disabled} className="letra flex">{letra}</button>
        ))}
      </div>
    );
  }
  