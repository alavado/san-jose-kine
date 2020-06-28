import React from 'react'
import ListaPacientes from './ListaPacientes'
import FichaPaciente from './FichaPaciente'
import './Pacientes.css'

const Pacientes = () => {
  return (
    <div className="Pacientes">
      <ListaPacientes />
      <FichaPaciente />
    </div>
  )
}

export default Pacientes
