import React from 'react';
import '../hojas-de-estilos/Boton.css';

function Boton({texto, esClick, manejarClick}) {
  return (
    <button
      className={esClick ? 'boton-click' : 'boton-reiniciar'}
      onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;