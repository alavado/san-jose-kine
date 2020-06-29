import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { escondeNuevoRegistro } from '../../../../redux/ducks/overlay'
import { InlineIcon } from '@iconify/react'
import iconoCancelar from '@iconify/icons-fa-solid/chevron-left'
import { formatearDatos } from '../../../../helpers/demograficos'
import { formatearRUT } from '../../../../helpers/rut'
import SeleccionTipoRegistro from './SeleccionTipoRegistro'
import './NuevoRegistro.css'

const NuevoRegistro = () => {

  const { mostrar, paciente } = useSelector(state => state.overlay)
  const dispatch = useDispatch()

  const { genero, edad } = formatearDatos(paciente)

  return (
    <div className={`NuevoRegistro${mostrar ? ' NuevoRegistro--activo' : ''}`}>
      <div className="NuevoRegistro__contenedor">
        <div className="NuevoRegistro__contenedor_superior">
          <h1 className="NuevoRegistro__titulo">
            Seguimiento San José - UChile
          </h1>
          <h2 className="NuevoRegistro__paciente">
            {paciente && paciente.nombre}
          </h2>
          <h3 className="NuevoRegistro__subtitulo_paciente">
            {genero}, {edad} años, {paciente && formatearRUT(paciente.rut)}
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
          <SeleccionTipoRegistro />
        </div>
      </div>
    </div>
  )
}

export default NuevoRegistro
