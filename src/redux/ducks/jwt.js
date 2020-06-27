const guardarToken = 'jwt/guardarToken'
const limpiarToken = 'jwt/limpiarToken'

const defaultState = {
  token: undefined
}

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case guardarToken: {
      return {
        ...state,
        token: action.payload
      }
    }
    case limpiarToken: {
      return {
        ...state,
        token: undefined
      }
    }
    default: {
      return state
    }
  }
}

export const recibiToken = token => {
  return { type: guardarToken, payload: token }
}

export const cierraLaSesion = () => {
  return { type: limpiarToken }
}