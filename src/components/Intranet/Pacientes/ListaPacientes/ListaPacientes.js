import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './ListaPacientes.css'
import Buscador from './Buscador'
import { NavLink } from 'react-router-dom'

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
        <NavLink
          to={`/intranet/paciente/${paciente.id}`}
          className="ListaPacientes__paciente"
          activeClassName="ListaPacientes__paciente--activo"
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
        </NavLink>
      ))}
    </div>
  )
}

export default ListaPacientes
