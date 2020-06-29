import React from 'react'
import './DatosPaciente.css'
import { formatearRUT } from '../../../../../helpers/rut'
import { formatearDatos } from '../../../../../helpers/demograficos'

const DatosPaciente = ({ paciente }) => {

  const { genero, edad } = formatearDatos(paciente)

  return (
    <div className="DatosPaciente">
      <div className="DatosPaciente__titulo">
        {paciente.nombre}
      </div>
      <div className="DatosPaciente__subtitulo">
        {genero}, {edad} años, {formatearRUT(paciente.rut)}
      </div>
      <div className="DatosPaciente__dato">
        <div className="DatosPaciente__titulo_dato">Teléfono</div>
        <div className="DatosPaciente__valor_dato">{paciente.telefono}</div>
      </div>
      <div className="DatosPaciente__dato">
        <div className="DatosPaciente__titulo_dato">Dirección</div>
        <div className="DatosPaciente__valor_dato">{paciente.direccion}</div>
      </div>
      <div className="DatosPaciente__dato">
        <div className="DatosPaciente__titulo_dato">Grupo</div>
        <div className="DatosPaciente__valor_dato">Piso pélvico</div>
      </div>
      <div className="DatosPaciente__dato">
        <div className="DatosPaciente__titulo_dato">Diagnóstico</div>
        <div className="DatosPaciente__valor_dato">{paciente.diagnostico}</div>
      </div>
    </div>
  )
}

export default DatosPaciente
