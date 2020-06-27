import React from 'react'
import './Miniatura.css'
import MiniaturaListaPacientes from './MiniaturaListaPacientes';

const Miniatura = () => {

  return (
    <div className="Miniatura">
      <div className="Miniatura__barra">
        <div className="Miniatura__botones">
          <div className="Miniatura__boton"></div>
          <div className="Miniatura__boton"></div>
          <div className="Miniatura__boton"></div>
        </div>
        <div className="Miniatura__titulo">Seguimiento San José - UChile</div>
      </div>
      <div className="Miniatura__cuerpo">
        {/* <MiniaturaListaPacientes /> */}
      </div>
    </div>
  )
}

export default Miniatura
