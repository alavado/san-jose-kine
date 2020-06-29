import React from 'react'
import { InlineIcon } from '@iconify/react'
import iconoBusqueda from '@iconify/icons-fa-solid/search'
import './Buscador.css'

const Buscador = ({ setFiltro }) => {
  return (
    <div className="Buscador">
      <InlineIcon className="Buscador__icono" icon={iconoBusqueda} />
      <input
        type="text"
        placeholder="Buscar paciente"
        className="Buscador__input"
        onChange={e => {
          const busqueda = e.target.value
          setFiltro(() => x => x.nombre.toLowerCase().includes(busqueda) || x.rut.includes(busqueda))
        }}
      />
    </div>
  )
}

export default Buscador
