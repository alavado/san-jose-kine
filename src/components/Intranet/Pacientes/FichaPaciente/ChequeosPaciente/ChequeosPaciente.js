import React from 'react'
import { InlineIcon } from '@iconify/react'
import iconoPacientes from '@iconify/icons-fa-solid/calendar-plus'
import './ChequeosPaciente.css'
import Chequeo from './Chequeo/Chequeo'

const ChequeosPaciente = ({ chequeos }) => {
  return (
    <div className="ChequeosPaciente">
      <div className="ChequeosPaciente__barra">
        <div className="ChequeosPaciente__titulo">
          Historial
        </div>
        <button className="ChequeoPaciente__boton_nuevo_chequeo">
          <InlineIcon
            className="ChequeoPaciente__icono_nuevo_chequeo"
            icon={iconoPacientes}
          />
          Agregar hito
        </button>
      </div>
      <div className="ChequeosPaciente__lista">
        {chequeos
          .sort((c1, c2) => c1.fecha < c2.fecha ? 1 : -1)
          .map(chequeo => <Chequeo chequeo={chequeo} />)
        }
      </div>
    </div>
  )
}

export default ChequeosPaciente
