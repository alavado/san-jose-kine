import React from 'react'
import './Miniatura.css'
import MiniaturaListaPacientes from './MiniaturaListaPacientes';
import ChequeosPaciente from '../../Intranet/Pacientes/FichaPaciente/ChequeosPaciente';

const Miniatura = () => {

  return (
    <div className="Miniatura">
      <div className="Miniatura__barra">
        <div className="Miniatura__botones">
          <div className="Miniatura__boton"></div>
          <div className="Miniatura__boton"></div>
          <div className="Miniatura__boton"></div>
        </div>
        <div className="Miniatura__titulo">Seguimiento San José - UChile</div>
      </div>
      <div className="Miniatura__cuerpo">
        <ChequeosPaciente chequeos={[
          {
            responsable: {
              nombre: 'Pedro Azócar'
            },
            fecha: '2010-07-01',
            observacion: 'Paciente en buenas condiciones',
            titulo: 'Entrevista telefónica'
          },
          {
            responsable: {
              nombre: 'Carolina Herrera'
            },
            fecha: '2010-06-15',
            observacion: 'Paciente sigue ejercitando al pie de la letra hasta esta fecha',
            titulo: 'Entrevista telefónica'
          },
          {
            responsable: {
              nombre: 'Pedro Azócar'
            },
            fecha: '2010-06-14',
            observacion: 'Se entregan primeras recomendaciones a paciente',
            titulo: 'Entrevista telefónica'
          },
        ]} />
        {/* <MiniaturaListaPacientes /> */}
      </div>
    </div>
  )
}

export default Miniatura
