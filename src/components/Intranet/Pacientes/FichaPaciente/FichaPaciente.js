import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import './FichaPaciente.css'
import { useParams } from 'react-router-dom'
import Loader from '../../../Loader'

const queryPaciente = gql`
  query Paciente($id: ID!) {
    paciente(id: $id) {
      nombre
      fecha_nacimiento
      sexo
      diagnostico
      chequeos {
        responsable {
          nombre
        }
        fecha
        observacion
      }
    }
  }
`

const FichaPaciente = () => {

  const { id } = useParams()
  const { data, loading, error } = useQuery(queryPaciente, {
    variables: { id }
  })

  if (!id) {
    return (
      <div className="FichaPaciente__contenedor_vacio">
        Selecciona un paciente
      </div>
    )
  }

  if (loading || !id) {
    return <div className="FichaPaciente__contenedor_loader"><Loader /></div>
  }

  if (error) {
    return <div className="FichaPaciente__contenedor_loader">Error</div>
  }

  return (
    <div className="FichaPaciente">
      <div className="FichaPaciente__contenedor_datos">
        <div>{data.paciente.nombre}</div>
        <div>{data.paciente.sexo}</div>
        <div>{data.paciente.fecha_nacimiento}</div>
        <div>{data.paciente.diagnostico}</div>
      </div>
      <div className="FichaPaciente__contenedor_datos">
        <h1>Chequeos</h1>
        {data.paciente.chequeos.map(chequeo => (
          <div>
            <div>{chequeo.fecha}</div>
            <div>{chequeo.observacion}</div>
            <div>{chequeo.responsable.nombre}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FichaPaciente
