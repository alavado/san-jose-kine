import moment from 'moment'

export const formatearDatos = paciente => {
  if (!paciente) {
    return { genero: undefined, edad: undefined }
  }
  const genero = paciente.sexo === 'Masculino' ? 'Hombre' : 'Mujer'
  const edad = moment().diff(moment(paciente.fecha_nacimiento), 'years')
  return { genero, edad }
}