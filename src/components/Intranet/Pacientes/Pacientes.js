import React from 'react'
import ListaPacientes from './ListaPacientes'
import FichaPaciente from './FichaPaciente'
import './Pacientes.css'
import NuevoRegistro from './NuevoRegistro'

const Pacientes = () => {
  return (
    <div className="Pacientes">
      <ListaPacientes />
      <FichaPaciente />
      <NuevoRegistro />
    </div>
  )
}

export default Pacientes
