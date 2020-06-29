import React from 'react'
import moment from 'moment'
import './DatosPaciente.css'

const DatosPaciente = ({ paciente }) => {

  const genero = paciente.sexo === 'Masculino' ? 'Hombre' : 'Mujer'
  const edad = moment().diff(moment(paciente.fecha_nacimiento), 'years')

  return (
    <div className="DatosPaciente">
      <div className="DatosPaciente__titulo">
        {paciente.nombre}
      </div>
      <div className="DatosPaciente__subtitulo">
        {genero}, {edad} años
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
