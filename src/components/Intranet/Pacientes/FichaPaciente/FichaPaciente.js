import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import './FichaPaciente.css'
import { useParams } from 'react-router-dom'

const queryPaciente = gql`
  {
    paciente(id: "x") {
      nombre
    }
  }
`

const FichaPaciente = () => {

  const { id } = useParams()
  const { data, loading, error } = useQuery(queryPaciente)

  if (loading) {
    return 'Cargando..'
  }

  return (
    <div className="FichaPaciente">
      ficha {id}
    </div>
  )
}

export default FichaPaciente
