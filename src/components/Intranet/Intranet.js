import React from 'react'
import Rombos from '../Landing/Rombos'
import { InlineIcon } from '@iconify/react'
import personCheckFill from '@iconify/icons-bi/person-check-fill'
import './Intranet.css'
import Lateral from './Lateral'
import { Switch, Route, useHistory, Redirect } from 'react-router'
import Inicio from './Inicio'
import ListaPacientes from './ListaPacientes'
import { useDispatch, useSelector } from 'react-redux'
import { cierraLaSesion } from '../../redux/ducks/jwt'

const Intranet = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.jwt)

  if (!token) {
    return <Redirect path="/" />
  }

  const cerrarSesion = () => {
    dispatch(cierraLaSesion())
    history.push('/')
  }

  return (
    <div className="Intranet">
      <Rombos desaparecen={true} />
      <div className="Intranet__barra">
        <div className="Intranet__logo">
          <div
            className="Intranet__logo_nombre"
            onClick={() => history.push('/intranet/inicio')}
          >
            <InlineIcon className="Intranet__logo_icono" icon={personCheckFill} /> 
            Seguimiento San José - UChile <span className="Intranet__nombre_centro">Administración</span>
          </div>
        </div>
        <div
          className="Intranet__barra_usuario"
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </div>
      </div>
      <div className="Intranet__contenido">
        <Lateral />
        <div className="Intranet__principal">
          <Switch>
            <Route path="/intranet/inicio" component={Inicio} />
            <Route path="/intranet/pacientes" component={ListaPacientes} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Intranet
