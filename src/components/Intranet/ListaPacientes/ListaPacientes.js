import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './ListaPacientes.css'

const queryPacientes = gql`
  {
    pacientes {
      id
      nombre
    }
  }
`

const ListaPacientes = () => {

  const { loading, error, data } = useQuery(queryPacientes)
  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }
  return (
    <div>
      lista pacientes
      {data.pacientes.map(p => <p key={p.id}>{p.nombre}</p>)}
    </div>
  )
}

export default ListaPacientes
