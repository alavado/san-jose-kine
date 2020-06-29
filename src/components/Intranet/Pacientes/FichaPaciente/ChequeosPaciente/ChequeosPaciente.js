import React from 'react'
import { InlineIcon } from '@iconify/react'
import iconoPacientes from '@iconify/icons-fa-solid/calendar-plus'
import './ChequeosPaciente.css'

const ChequeosPaciente = ({ chequeos }) => {
  return (
    <div className="ChequeosPaciente">
      <div className="ChequeosPaciente__barra">
        <div className="ChequeosPaciente__titulo">
          Historial
        </div>
        <button className="ChequeoPaciente__boton_nuevo_chequeo">
          <InlineIcon
            className="ChequeoPaciente__icono_nuevo_chequeo"
            icon={iconoPacientes}
          />
          Nuevo chequeo
        </button>
      </div>
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
