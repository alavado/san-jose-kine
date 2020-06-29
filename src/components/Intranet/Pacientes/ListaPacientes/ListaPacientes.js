import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './ListaPacientes.css'
import Buscador from './Buscador'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import Loader from '../../../Loader'

const queryPacientes = gql`
  {
    pacientes {
      id
      nombre
      rut
      chequeos {
        fecha
      }
    }
  }
`

const ListaPacientes = () => {

  const { loading, error, data } = useQuery(queryPacientes)
  const [filtro, setFiltro] = useState(() => () => true)
  
  if (loading) {
    return <div className="ListaPacientes__cargando"><Loader /></div>
  }

  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  return (
    <div className="ListaPacientes">
      <Buscador setFiltro={setFiltro} />
      <div className="ListaPacientes__lista">
        {data.pacientes
          .filter(filtro)
          .sort((p1, p2) => p1.nombre > p2.nombre ? 1 : -1)
          .map(paciente => (
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
                Último hito: {paciente.chequeos.length === 0 ? '-' : moment(paciente.chequeos[0].fecha).format('DD/MM/YYYY')}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default ListaPacientes
