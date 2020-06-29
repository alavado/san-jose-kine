const mostrar = 'overlay/mostrar'

const defaultState = {
  mostrar: false,
  paciente: undefined
}

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case mostrar:
      if (action.payload.mostrar) {
        return {
          ...state,
          mostrar: true,
          paciente: action.payload.paciente
        }
      }
      else {
        return {
          ...state,
          mostrar: false,
          paciente: undefined
        }
      }
    default: {
      return state
    }
  }
}

export const muestraNuevoRegistro = paciente =>  {
  return { type: mostrar, payload: { paciente, mostrar: true } }
}

export const escondeNuevoRegistro = () => {
  return { type: mostrar, payload: { mostra: false } }
}
