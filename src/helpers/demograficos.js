import moment from 'moment'

export const formatearDatos = paciente => {
  const genero = paciente.sexo === 'Masculino' ? 'Hombre' : 'Mujer'
  const edad = moment().diff(moment(paciente.fecha_nacimiento), 'years')
  return { genero, edad }
}