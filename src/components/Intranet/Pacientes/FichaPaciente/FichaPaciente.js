import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import './FichaPaciente.css'
import { useParams } from 'react-router-dom'
import Loader from '../../../Loader'
import DatosPaciente from './DatosPaciente'
import ChequeosPaciente from './ChequeosPaciente'
import { queryPaciente } from '../../../../graphql/queryPaciente'

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
      <ChequeosPaciente paciente={data.paciente} />
    </div>
  )
}

export default FichaPaciente
