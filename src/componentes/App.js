import Jogo from "./Jogo";
import Letras from "./Letras";


function App() {
  const forca0 = process.env.PUBLIC_URL + '/assets/forca0.png';
  return (
    <div className="container flex">
      <Jogo />
      <Letras />
    </div>
  );
}



export default App;
