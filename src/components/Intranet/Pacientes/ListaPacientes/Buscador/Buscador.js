import React from 'react'
import { InlineIcon } from '@iconify/react'
import iconoBusqueda from '@iconify/icons-fa-solid/search'
import './Buscador.css'

const Buscador = () => {
  return (
    <div className="Buscador">
      <InlineIcon className="Buscador__icono" icon={iconoBusqueda} />
      <input
        type="text"
        placeholder="Buscar paciente"
        className="Buscador__input"
      />
    </div>
  )
}

export default Buscador
