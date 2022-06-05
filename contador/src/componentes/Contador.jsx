import React from 'react';
import '../hojas-de-estilos/Contador.css';

function Contador ({ clicksNumber }) {
  return(
    <div className="contador">
      { clicksNumber }
    </div>
  )
}

export default Contador; 