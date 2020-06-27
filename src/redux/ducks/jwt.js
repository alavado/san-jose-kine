const guardarToken = 'jwt/guardarToken'
const limpiarToken = 'jwt/limpiarToken'

const defaultState = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjZhMTVhODQxNWQwNjU1YmQ4YjJlMSIsImlhdCI6MTU5MzI4Mjk3NywiZXhwIjoxNTk1ODc0OTc3fQ.clIZdL-8i5mtp1QzkcovfUIn0Rl_iPkxpDT9XtILWC0'
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

export const tomaEsteToken = token => {
  return { type: guardarToken, payload: token }
}

export const cierraLaSesion = () => {
  return { type: limpiarToken }
}