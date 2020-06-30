import gql from 'graphql-tag'

export const queryPaciente = gql`
  query Paciente($id: ID!) {
    paciente(id: $id) {
      id
      nombre
      fecha_nacimiento
      sexo
      diagnostico
      telefono
      direccion
      rut
      chequeos {
        id
        responsable {
          nombre
          cargo
          instituciones {
            nombre
          }
        }
        createdAt
        observacion
        titulo
      }
    }
  }
`