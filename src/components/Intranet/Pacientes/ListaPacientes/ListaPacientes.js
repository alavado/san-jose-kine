import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './ListaPacientes.css'
import Buscador from './Buscador'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es'
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

  const ordenarChequeos = (paciente1, paciente2) => {
    if (paciente1.chequeos.length === 0) {
      return 1
    }
    else if (paciente2.chequeos.length === 0) {
      return -1
    }
    return paciente1.chequeos[0].fecha > paciente2.chequeos[0].fecha ? -1 : 1
  }

  return (
    <div className="ListaPacientes">
      <Buscador setFiltro={setFiltro} />
      <div className="ListaPacientes__lista">
        {data.pacientes
          .filter(filtro)
          .sort(ordenarChequeos)
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
                Último registro: {paciente.chequeos.length === 0 ? '-' : moment(paciente.chequeos[0].fecha).format('DD [de] MMMM')}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default ListaPacientes
