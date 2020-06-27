import React from 'react'
import './Lateral.css'
import { NavLink } from 'react-router-dom'
import { InlineIcon } from '@iconify/react'
import homeIcon from '@iconify/icons-vs/globe'
import listIcon from '@iconify/icons-vs/shield-check'

const Lateral = () => {
  return (
    <div className="Lateral">
      <div className="Lateral__links">
        <NavLink
          activeClassName="Lateral__link--activo"
          className="Lateral__link"
          to="/intranet/inicio"
        >
          <InlineIcon className="Lateral__icono_link" icon={homeIcon} /> Inicio
        </NavLink>
        <NavLink
          activeClassName="Lateral__link--activo"
          className="Lateral__link"
          to="/intranet/pacientes"
        >
          <InlineIcon className="Lateral__icono_link" icon={listIcon} /> Pacientes
        </NavLink>
      </div>
    </div>
  )
}

export default Lateral
