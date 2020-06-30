import React from 'react'
import { InlineIcon } from '@iconify/react'
import iconoSiguiente from '@iconify/icons-fa-solid/chevron-right'
import './LlamadaSeguimiento.css'
import PresentacionLlamada from './PresentacionLlamada/PresentacionLlamada'

const LlamadaSeguimiento = () => {

  return (
    <div className="LlamadaSeguimiento">
      <PresentacionLlamada />
      <button
        className="Observacion__boton_agregar"
        type="submit"
      >
        <InlineIcon
          className="Observacion__icono_boton_agregar"
          icon={iconoSiguiente}
        />
        Comenzar
      </button>
    </div>
  )
}

export default LlamadaSeguimiento
