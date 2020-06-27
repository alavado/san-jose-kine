import React from 'react'
import { InlineIcon } from '@iconify/react'
import personCheckFill from '@iconify/icons-bi/person-check-fill'
import './Navegacion.css'
import { useHistory } from 'react-router'

const Navegacion = () => {

  const history = useHistory()

  return (
    <div className="Navegacion">
      <div className="Navegacion__logo" onClick={() => history.push('/')}>
        <div className="Navegacion__nombre"><InlineIcon icon={personCheckFill} /> Seguimiento San José - UChile</div>
      </div>
      <nav className="Navegacion__links">
        <div className="Navegacion__link" onClick={() => history.push('/')}>Inicio</div>
        <div className="Navegacion__link" onClick={() => history.push('/login')}>Ingresar</div>
      </nav>
    </div>
  )
}

export default Navegacion
