import nombresHombre from '../data/nombres/hombre.json'
import nombresMujer from '../data/nombres/mujer.json'
import apellidos from '../data/nombres/apellidos.json'

export const nombreAleatorio = genero => {
  const nombres = genero === 'm' ? nombresHombre : nombresMujer
  const nombre = nombres[Math.floor(Math.random() * nombres.length)]
  const apellido1 = apellidos[Math.floor(Math.random() * apellidos.length)]
  const apellido2 = apellidos[Math.floor(Math.random() * apellidos.length)]
  return `${nombre} ${apellido1} ${apellido2}`.toLocaleLowerCase()
}