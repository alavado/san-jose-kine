import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './ListaPacientes.css'
import Buscador from './Buscador'

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
    <div className="ListaPacientes">
      <Buscador />
      {data.pacientes.map(paciente => (
        <div
          className="ListaPacientes__paciente"
          key={paciente.id}
        >
          <div className="ListaPacientes__avatar">
            {paciente.nombre[0]}
          </div>
          <div className="ListaPacientes__datos">
            <div className="ListaPacientes__nombre_paciente">
              {paciente.nombre}
            </div>
            <div className="ListaPacientes__subitulo_paciente">
              Última llamada: 16 de mayo
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListaPacientes
