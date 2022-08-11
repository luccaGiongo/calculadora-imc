
import { useState } from "react";
import { GlobalStyle } from "./App.styles";
import { Header } from "./components/Header/Header.style";
import { GridItem } from "./components/GridRightSide/GridItem"
import imagemHeader from './imgs/powered.png';
import leftArrowImage from './imgs/leftarrow.png'
import { levels, calculateImc, Level } from './helpers/imc'


const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));

    } else {
      alert('Digite todos os campos!')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

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

        <div className="leftSide">
          <h1>Calcule o seu IMC.</h1>
          <p>
            parâmetro adotado pela Organização Mundial de Saúde para
            calcular o peso ideal de cada pessoa.
            IMC é a Sigla para Índice de Massa Corpórea</p>
          <input
            type="number"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            placeholder="Digite a sua Altura Ex.: 1.5 (em metros)" />
          <input
            type="number"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            placeholder="Digite o seu Peso Ex.: 75.3 (em kg)" />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>


        <div className="rightSide">
          {!toShow &&
            <div className="grid">
              {levels.map((item, index) => (
                <GridItem item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className="rightBig">
              <div className="rightArrow">
                <img src={leftArrowImage} alt="" width={40} onClick={handleBackButton}/>
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>


      </div>


    </>
  );
}

export default App;
