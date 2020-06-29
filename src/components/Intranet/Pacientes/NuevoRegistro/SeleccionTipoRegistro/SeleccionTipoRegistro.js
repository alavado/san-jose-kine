import React from 'react'
import { InlineIcon } from '@iconify/react'
import iconoLlamada from '@iconify/icons-fa-solid/phone'
import iconoObservacion from '@iconify/icons-fa-solid/user-edit'
import './SeleccionTipoRegistro.css'

const SeleccionTipoRegistro = () => {
  return (
    <div className="SeleccionTipoRegistro">
      <p className="SeleccionTipoRegistro__instruccion">Seleccione el tipo de registro</p>
      <div className="SeleccionTipoRegistro__contenedor_opciones">
        <button className="SeleccionTipoRegistro__boton_opcion">
          <div className="SeleccionTipoRegistro__icono_opcion">
            <InlineIcon icon={iconoLlamada} />
          </div>
          <div className="SeleccionTipoRegistro__texto_opcion">
            Llamada de seguimiento
          </div>
        </button>
        <button className="SeleccionTipoRegistro__boton_opcion">
          <div className="SeleccionTipoRegistro__icono_opcion">
            <InlineIcon icon={iconoObservacion} />
          </div>
          <div className="SeleccionTipoRegistro__texto_opcion">
            Observación
          </div> 
        </button>
      </div>
    </div>
  )
}

export default SeleccionTipoRegistro
