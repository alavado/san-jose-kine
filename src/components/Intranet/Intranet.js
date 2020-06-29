import React from 'react'
import Rombos from '../Landing/Rombos'
import Lateral from './Lateral'
import { Switch, Route, useHistory, Redirect } from 'react-router'
import Inicio from './Inicio'
import Pacientes from './Pacientes'
import { useDispatch, useSelector } from 'react-redux'
import { cierraLaSesion } from '../../redux/ducks/jwt'
import { useQuery } from '@apollo/react-hooks'
import { decode } from 'jsonwebtoken'
import gql from 'graphql-tag'
import './Intranet.css'

const queryUsuario = gql`
  query Usuario($id: ID!) {
    user(id: $id) {
      nombre
    }
  }
`

const Intranet = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.jwt)
  
  const { data } = useQuery(queryUsuario, {
    variables: { id: decode(token).id }
  })

  // if (!token) {
  //   return <Redirect path="/login" />
  // }

  const cerrarSesion = () => {
    dispatch(cierraLaSesion())
    history.push('/')
  }

  return (
    <div className="Intranet">
      <Rombos desaparecen={true} />
      <div className="Intranet__barra">
        <div className="Intranet__logo">
          <div className="Intranet__logo_nombre">
            Seguimiento San José - UChile <span className="Intranet__nombre_centro">Administración</span>
          </div>
        </div>
        <div className="Intranet__barra_usuario">
          <div className="Intranet__nombre_usuario">
            {data && data.user.nombre}
          </div>
          <div
            className="Intranet__cerrar_sesion"
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </div>
        </div>
      </div>
      <div className="Intranet__contenido">
        <Lateral />
        <div className="Intranet__principal">
          <Switch>
            <Route path="/intranet/inicio" component={Inicio} />
            <Route path="/intranet/pacientes" component={Pacientes} />
            <Route path="/intranet/paciente/:id" component={Pacientes} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Intranet
