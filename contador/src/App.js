import './App.css';
import freeCodeCampLogo from '../src/img/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [clicksNumber, setNumClicks] = useState(0);

  const manejarClick = () => { 
   setNumClicks(clicksNumber + 1);
  }

  const reiniciarContador = () => { 
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de Freecode camp' />
      </div>
      
      <div className='contenedor-principal'>
        <Contador  clicksNumber={clicksNumber}  />
        <Boton
          texto='Click'
          esClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reinciar'
          esClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
