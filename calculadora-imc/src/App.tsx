import { GlobalStyle } from "./App.styles";
import { Header } from "./components/Header/Header.style";
import imagemHeader from './imgs/powered.png';


const App = () => {
  return (
    // Fragment
    <>
      <GlobalStyle />
      <Header>
        <div>
          <img src={imagemHeader} alt="Imagem Header Aqui" width={250} />
        </div>
      </Header>
      <div className="container">
        <div className="leftSide">adas</div>
        <div className="rightSide">asdasd</div>
      </div>


    </>
  );
}

export default App;
