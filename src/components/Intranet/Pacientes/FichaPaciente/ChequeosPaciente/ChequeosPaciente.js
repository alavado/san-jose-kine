import React from 'react'
import './ChequeosPaciente.css'

const ChequeosPaciente = ({ chequeos }) => {
  return (
    <div className="ChequeosPaciente">
      <h1>Chequeos</h1>
      {chequeos.map(chequeo => (
        <div>
          <div>{chequeo.fecha}</div>
          <div>{chequeo.observacion}</div>
          <div>{chequeo.responsable.nombre}</div>
        </div>
      ))}
    </div>
  )
}

export default ChequeosPaciente
