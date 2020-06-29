import React from 'react'
import { InlineIcon } from '@iconify/react'
import iconoPacientes from '@iconify/icons-fa-solid/circle-notch'
import Chequeo from './Chequeo/Chequeo'
import { useDispatch } from 'react-redux'
import './ChequeosPaciente.css'
import { muestraNuevoRegistro } from '../../../../../redux/ducks/overlay'

const ChequeosPaciente = ({ paciente }) => {

  const dispatch = useDispatch()
  const { chequeos } = paciente

  return (
    <div className="ChequeosPaciente">
      <div className="ChequeosPaciente__barra">
        <div className="ChequeosPaciente__titulo">
          Historial
        </div>
        <button
          className="ChequeoPaciente__boton_nuevo_chequeo"
          onClick={() => dispatch(muestraNuevoRegistro(paciente))}
          title={`Registrar llamada u otro tipo de atención`}
        >
          <InlineIcon
            className="ChequeoPaciente__icono_nuevo_chequeo"
            icon={iconoPacientes}
          />
          Agregar registro
        </button>
      </div>
      <div className="ChequeosPaciente__lista">
        {chequeos
          .sort((c1, c2) => c1.fecha < c2.fecha ? 1 : -1)
          .map(chequeo => <Chequeo key={chequeo.id} chequeo={chequeo} />)
        }
      </div>
    </div>
  )
}

export default ChequeosPaciente
