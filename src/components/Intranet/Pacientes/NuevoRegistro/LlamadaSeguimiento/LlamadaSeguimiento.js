import React, { useState } from 'react'
import { InlineIcon } from '@iconify/react'
import iconoSiguiente from '@iconify/icons-fa-solid/chevron-right'
import PresentacionLlamada from './PresentacionLlamada'
import Encuesta from './Encuesta'
import './LlamadaSeguimiento.css'

const LlamadaSeguimiento = () => {

  const [comence, setComence] = useState(false)

  return (
    <div className="LlamadaSeguimiento">
      {!comence ?
        <>
          <PresentacionLlamada />
          <button
            className="LlamadaSeguimiento__boton_comenzar"
            onClick={() => setComence(true)}
          >
            <InlineIcon
              className="LlamadaSeguimiento__icono_boton_comenzar"
              icon={iconoSiguiente}
            />
            Comenzar entrevista
          </button>
        </> :
        <Encuesta />
      }
    </div>
  )
}

export default LlamadaSeguimiento
