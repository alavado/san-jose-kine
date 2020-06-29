import React from 'react'
import './DatosPaciente.css'

const DatosPaciente = ({ paciente }) => {
  return (
    <div className="DatosPaciente">
      <div>{paciente.nombre}</div>
      <div>{paciente.sexo}</div>
      <div>{paciente.fecha_nacimiento}</div>
      <div>{paciente.diagnostico}</div>
    </div>
  )
}

export default DatosPaciente
