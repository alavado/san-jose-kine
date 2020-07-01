import gql from 'graphql-tag'

export const mutationNuevoChequeo = gql`
  mutation NuevoChequeo(
    $responsable: ID!
    $paciente: ID!
    $titulo: String
    $contenido: JSON
    $observacion: String
  ) {
    createChequeo(input: {
      data: {
        responsable: $responsable
        paciente: $paciente
        titulo: $titulo
        contenido: $contenido
        observacion: $observacion
      }
    }) {
      chequeo {
        id
      }
    }
  }
`