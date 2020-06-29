import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import './FichaPaciente.css'
import { useParams } from 'react-router-dom'
import Loader from '../../../Loader'
import DatosPaciente from './DatosPaciente'
import ChequeosPaciente from './ChequeosPaciente'

const queryPaciente = gql`
  query Paciente($id: ID!) {
    paciente(id: $id) {
      nombre
      fecha_nacimiento
      sexo
      diagnostico
      telefono
      direccion
      chequeos {
        responsable {
          nombre
        }
        fecha
        observacion
        titulo
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
      <DatosPaciente paciente={data.paciente} />
      <ChequeosPaciente chequeos={data.paciente.chequeos} />
    </div>
  )
}

export default FichaPaciente
