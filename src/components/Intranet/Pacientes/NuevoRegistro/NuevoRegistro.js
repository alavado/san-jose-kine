import React from 'react'
import './NuevoRegistro.css'
import { useSelector, useDispatch } from 'react-redux'
import { escondeNuevoRegistro } from '../../../../redux/ducks/overlay'
import { InlineIcon } from '@iconify/react'
import iconoCancelar from '@iconify/icons-fa-solid/times'
import iconoLlamada from '@iconify/icons-fa-solid/phone'
import iconoObservacion from '@iconify/icons-fa-solid/user-edit'
import { formatearDatos } from '../../../../helpers/demograficos'
import { formatearRUT } from '../../../../helpers/rut'

const NuevoRegistro = () => {

  const { mostrar, paciente } = useSelector(state => state.overlay)
  const dispatch = useDispatch()

  if (!mostrar) {
    return null
  }
  const { genero, edad } = formatearDatos(paciente)

  return (
    <div className="NuevoRegistro">
      <div className="NuevoRegistro__contenedor">
        <div className="NuevoRegistro__contenedor_superior">
          <h1 className="NuevoRegistro__titulo">
            Seguimiento San José - UChile
          </h1>
          <h2 className="NuevoRegistro__paciente">
            Paciente: {paciente.nombre}
          </h2>
          <h3 className="NuevoRegistro__subtitulo_paciente">
            {genero}, {edad} años, {formatearRUT(paciente.rut)}
          </h3>
        </div>
        <button
          className="NuevoRegistro__boton_cancelar"
          onClick={() => dispatch(escondeNuevoRegistro())}
        >
          <InlineIcon
            className="NuevoRegistro__icono_boton_cancelar"
            icon={iconoCancelar}
          />
          Cancelar
        </button>
        <div className="NuevoRegistro__contenedor_central">
          <p className="NuevoRegistro__instruccion">Seleccione el tipo de registro</p>
          <div className="NuevoRegistro__contenedor-opciones">
            <button className="NuevoRegistro__boton_opcion">
              <div className="NuevoRegistro__icono_opcion">
                <InlineIcon icon={iconoLlamada} />
              </div>
              <div className="NuevoRegistro__texto_opcion">
                Llamada de seguimiento
              </div> 
            </button>
            <button className="NuevoRegistro__boton_opcion">
              <div className="NuevoRegistro__icono_opcion">
                <InlineIcon icon={iconoObservacion} />
              </div>
              <div className="NuevoRegistro__texto_opcion">
                Observación
              </div> 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuevoRegistro
