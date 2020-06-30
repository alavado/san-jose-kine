import React from 'react'
import './Miniatura.css'
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
        <ChequeosPaciente paciente={{
          chequeos : [
            {
              id: 'chequeo-falso-1',
              responsable: {
                nombre: 'Pedro Azócar',
                cargo: 'Kinesiólogo',
                instituciones: [
                  {
                    nombre: 'Universidad del Maule'
                  }
                ]
              },
              fecha: '2010-07-01',
              observacion: 'Paciente en buenas condiciones',
              titulo: 'Entrevista telefónica'
            },
            {
              id: 'chequeo-falso-2',
              responsable: {
                nombre: 'Carolina Herrera',
                cargo: 'Kinesióloga',
                instituciones: [
                  {
                    nombre: 'Universidad de San Felipe'
                  }
                ]
              },
              fecha: '2010-06-15',
              observacion: 'Paciente sigue ejercitando al pie de la letra hasta esta fecha',
              titulo: 'Entrevista telefónica'
            },
            {
              id: 'chequeo-falso-3',
              responsable: {
                nombre: 'Pedro Azócar',
                cargo: 'Docente',
                instituciones: [
                  {
                    nombre: 'Universidad de Chile'
                  }
                ]
              },
              fecha: '2010-06-14',
              observacion: 'Se entregan primeras recomendaciones a paciente',
              titulo: 'Entrevista telefónica'
            },
          ]
        }} />
        {/* <MiniaturaListaPacientes /> */}
      </div>
    </div>
  )
}

export default Miniatura
