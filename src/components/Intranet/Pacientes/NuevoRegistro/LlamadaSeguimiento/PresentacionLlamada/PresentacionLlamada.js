import React, { useState } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import './PresentacionLlamada.css'

const PresentacionLlamada = () => {

  const [quienRespondeVisible, setQuienRespondeVisible] = useState(false)
  const { paciente } = useSelector(state => state.overlay)
  const { usuario } = useSelector(state => state.jwt)

  const saludo = moment().hour() < 12 ? 'Buenos días' : 'Buenas tardes'
  const esHombre = paciente.sexo === 'Masculino'

  return (
    <>
      <div className="PresentacionLlamada">
        <h1 className="PresentacionLlamada__titulo">Contacte {esHombre ? 'al' : 'a la'} paciente y use este libreto como guía</h1>
        <p>"{saludo}, mi nombre es {usuario.nombre}, soy {usuario.cargo} en {usuario.instituciones[0].nombre}.</p>
        <p>Llamo por parte de Kinesiología del Hospital San josé.</p>
        <p>Necesito contactar a {paciente.nombre}, ¿confirma que es usted?</p>
        <p style={{ fontStyle: 'italic' }}>Espere confirmación {esHombre ? 'del' : 'de la'} paciente,
          <div
            className="LlamadaSeguimiento__sin_respuesta"
            onClick={() => setQuienRespondeVisible(true)}
          >
            haga click aquí si paciente no puede contestar
          </div>
        </p>
        <p>Usted tiene indicación de atención kinesiológica pendiente o en espera, dado que la
        atención ambulatoria en el CDT está suspendida por la pandemia que
        enfrentamos.</p>
        <p>Sus deberes: Entregar información veraz acerca de su identidad, dirección y enfermedad. Tratar
        respetuosamente al personal de salud.</p>
        <p>Sus derechos: Trato digno, resguardo de sus datos y aceptar o rechazar esta atención."</p>
      </div>
      {quienRespondeVisible && <div className="PresentacionLlamada__contenedor_sin_respuesta">
        <p>Si {esHombre ? 'el' : 'la'} paciente no puede responder por
        encontrarse ocupad{esHombre ? 'o' : 'a'}, debe coordinarse un nuevo horario para realizar la llamada y cortar la
        llamada.</p>
        <p>En caso de que {esHombre ? 'el' : 'la'} paciente no pueda responder por estado de conciencia o condición de salud, ingrese relación o
        parentesco con la persona que responde, procurando que quien responda sea el familiar más
        directo posible {esHombre ? 'del' : 'de la'} paciente.</p>
        <input
          type="text"
          className="PresentacionLlamada__input_contenedor_sin_respuesta"
          placeholder="Indique quién responde"
        />
      </div>}
    </>
  )
}

export default PresentacionLlamada
