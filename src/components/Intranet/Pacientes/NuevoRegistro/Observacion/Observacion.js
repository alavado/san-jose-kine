import React, { useRef, useState, useEffect } from 'react'
import { InlineIcon } from '@iconify/react'
import iconoPacientes from '@iconify/icons-fa-solid/circle-notch'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import './Observacion.css'
import { escondeNuevoRegistro } from '../../../../../redux/ducks/overlay'
import { queryPaciente } from '../../../../../graphql/queryPaciente'

const mutationObservacion = gql`
  mutation AgregarObservacion(
    $observacion: String!,
    $paciente: ID!,
    $responsable: ID!
  ) {
    createChequeo(input: {
      data: {
        titulo: "Observación"
        paciente: $paciente
        responsable: $responsable
        observacion: $observacion
      }
    }) {
      chequeo {
        id
      }
    }
  }
`

const Observacion = () => {

  const { paciente } = useSelector(state => state.overlay)
  const textarea = useRef()
  const [mutation, { loading }] = useMutation(mutationObservacion)
  const [observacion, setObservacion] = useState('')
  const { id } = useSelector(state => state.jwt)
  const dispatch = useDispatch()

  useEffect(() => {
    textarea.current.focus()
  }, [])

  console.log({paciente})

  const registrarObservacion = e => {
    e.preventDefault()
    mutation({
      variables: {
        observacion,
        paciente: paciente.id,
        responsable: id
      },
      refetchQueries: [{
        query: queryPaciente,
        variables: { id: paciente.id }
      }]
    })
      .then(() => dispatch(escondeNuevoRegistro()))
      .catch(console.error)
  }

  return (
    <div className="Observacion">
      <h1 className="Observacion__titulo">Observación</h1>
      <form
        className="Observacion__formulario"
        onSubmit={registrarObservacion}
      >
        <textarea
          className="Observacion__texto"
          placeholder={`Escribe algo para agregar al historial de ${paciente.nombre}.`}
          ref={textarea}
          onChange={e => setObservacion(e.target.value)}
        >
        </textarea>
        <button
          className="Observacion__boton_agregar"
          type="submit"
          disabled={loading || observacion.length < 1}
        >
          <InlineIcon
            className="Observacion__icono_boton_agregar"
            icon={iconoPacientes}
          />
          {loading ? 'Agregando...' : 'Agregar registro'}
        </button>
      </form>
    </div>
  )
}

export default Observacion
