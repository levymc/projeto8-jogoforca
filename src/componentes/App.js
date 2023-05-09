import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";
import forca0 from "../img/forca0.png"
import forca1 from "../img/forca1.png"
import forca2 from "../img/forca2.png"
import forca3 from "../img/forca0.png"
import forca4 from "../img/forca0.png"
import forca5 from "../img/forca0.png"
import forca6 from "../img/forca0.png"


function App() {
  const [imagemForca, setImagemForca] = useState(forca0);

  const handleChangeImagem = (novaImagem) => {
    setImagemForca(novaImagem);
  };

  return (
    <div className="container flex">
      <Jogo image={imagemForca} />
      <Letras />
    </div>
  );
}

export default App;

