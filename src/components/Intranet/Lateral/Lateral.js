import React from 'react'
import './Lateral.css'
import { NavLink } from 'react-router-dom'
import { InlineIcon } from '@iconify/react'
import iconoInicio from '@iconify/icons-fa-solid/home';
import iconoPacientes from '@iconify/icons-fa-solid/user-check';
import iconoUsuarios from '@iconify/icons-fa-solid/key';

const Lateral = () => {
  return (
    <div className="Lateral">
      <div className="Lateral__links">
        <NavLink
          activeClassName="Lateral__link--activo"
          className="Lateral__link"
          to="/intranet/inicio"
        >
          <InlineIcon className="Lateral__icono_link" icon={iconoInicio} />
          <div className="Lateral__texto_link">Inicio</div>
        </NavLink>
        <NavLink
          activeClassName="Lateral__link--activo"
          className="Lateral__link"
          to="/intranet/pacientes"
        >
          <InlineIcon className="Lateral__icono_link" icon={iconoPacientes} />
          <div className="Lateral__texto_link">Pacientes</div>
        </NavLink>
        <NavLink
          activeClassName="Lateral__link--activo"
          className="Lateral__link"
          to="/intranet/usuarios"
        >
          <InlineIcon className="Lateral__icono_link" icon={iconoUsuarios} />
          <div className="Lateral__texto_link">Usuarios</div>
        </NavLink>
      </div>
    </div>
  )
}

export default Lateral
