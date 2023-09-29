import './App.css';
import Button from './componentes/Button';
import Counter from './componentes/Counter';
import freeCodeCampLogo from './img/freeCodeCampLogo.png'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1);
  }
  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='fcc-logo-cont'>
        <img 
          className='fcc-logo' 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' 
          />
      </div>
      <div className='main-container'>
      <h1 className='comment'>Simple App to count clicks - MairaHdez/FrontEnd</h1>

        <Counter 
         numClicks={numClicks}
         />
        <Button 
        texto='Click here' 
        isClickButton={true} 
        manageClick={manageClick} />
        <Button 
        texto='Restart' 
        isClickButton={false}
        manageClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
