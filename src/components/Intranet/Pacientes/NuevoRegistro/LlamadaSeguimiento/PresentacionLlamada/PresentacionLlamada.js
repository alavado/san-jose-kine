import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import './PresentacionLlamada.css'

const PresentacionLlamada = () => {

  const saludo = moment().hour() < 12 ? 'Buenos días' : 'Buenas tardes'
  const { paciente } = useSelector(state => state.overlay)
  const { usuario } = useSelector(state => state.jwt)

  const otros = `
  <p>En caso de que el paciente
  no pueda responder por estado de conciencia o condición de salud, especificar relación o
  parentesco con la persona que responde (Procure que quien responda sea el familiar más
  directo posible del paciente). Si el paciente no puede responder en ese momento por
  encontrarse ocupado, debe coordinarse nuevo horario para realizar la llamada y cortar la
  llamada.</p>`

  return (
    <div className="PresentacionLlamada">
      <h1 className="PresentacionLlamada__titulo">Contacte al paciente y use este libreto como guía</h1>
      <p>"{saludo}, mi nombre es {usuario.nombre}, soy {usuario.cargo} en {usuario.instituciones[0].nombre}.</p>
      <p>Llamo por parte de Kinesiología del Hospital San josé.</p>
      <p>Necesito contactar a {paciente.nombre}, ¿confirma que es usted?</p>
      <p style={{ fontStyle: 'italic' }}>Espere confirmación del paciente, haga click aquí si el paciente no puede contestar</p>
      <p>Usted tiene indicación de atención kinesiológica pendiente o en espera, dado que la
      atención ambulatoria en el CDT está suspendida por la pandemia que
      enfrentamos.</p>
      <p>Sus deberes: Entregar información veraz acerca de su identidad, dirección y enfermedad. Tratar
      respetuosamente al personal de salud.</p>
      <p>Sus derechos: Trato digno, resguardo de sus datos y aceptar o rechazar esta atención."</p>
    </div>
  )
}

export default PresentacionLlamada
