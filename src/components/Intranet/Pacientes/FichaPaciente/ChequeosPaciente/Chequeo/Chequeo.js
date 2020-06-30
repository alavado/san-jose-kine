import React from 'react'
import { InlineIcon } from '@iconify/react'
import iconoPacientes from '@iconify/icons-fa-solid/external-link-square-alt'
import moment from 'moment'
import 'moment/locale/es'
import './Chequeo.css'

const Chequeo = ({ chequeo }) => {
  return (
    <div className="Chequeo">
      <div className="Chequeo__encabezado">
        <div className="Chequeo__circulo" />
        <div className="Chequeo__fecha">
          {moment(chequeo.createdAt).format('dddd DD [de] MMMM [a las] HH:mm')}
        </div>
      </div>
      <div className="Chequeo__tarjeta">
        <div className="Chequeo__titulo">
          {chequeo.titulo}
        </div>
        <div className="Chequeo__responsable">
          <div className="Chequeo__avatar_responsable">
            {chequeo.responsable.nombre[0]}
          </div>
          <div className="Chequeo__datos_responsable">
            <div className="Chequeo__nombre_responsable">{chequeo.responsable.nombre}</div>
            <div className="Chequeo__titulo_responsable">{chequeo.responsable.instituciones[0].nombre}</div>
          </div>
        </div>
        <div className="Chequeo__nota">
          {chequeo.observacion.split('\n').map(obs => <p>{obs}</p>)}
        </div>
        {chequeo.contenido &&
          <div className="Chequeo__link">
            <InlineIcon
              className="ChequeoPaciente__icono_nuevo_chequeo"
              icon={iconoPacientes}
            />
            Ver detalles
          </div>
        }
      </div>
    </div>
  )
}

export default Chequeo
