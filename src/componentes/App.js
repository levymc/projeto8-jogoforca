import Jogo from "./Jogo";


function App() {
  const forca0 = process.env.PUBLIC_URL + '/assets/forca0.png';
  return (
    <div className="container flex centerAll">
      <Jogo />
    </div>
  );
}



export default App;
