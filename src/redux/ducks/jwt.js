import { decode } from "jsonwebtoken"

const guardarToken = 'jwt/guardarToken'
const limpiarToken = 'jwt/limpiarToken'
const guardarUsuario = 'jwt/guardarUsuario'

const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjZhMTVhODQxNWQwNjU1YmQ4YjJlMSIsImlhdCI6MTU5MzM1ODg2MiwiZXhwIjoxNTk1OTUwODYyfQ.wGU50cFishqU0kL-uFaADl6NP6bDHm2_O5eyXnLNLOw'

const defaultState = {
  token: window.location.href.indexOf('localhost') > 0 ? t : undefined,
  id: window.location.href.indexOf('localhost') > 0 ? decode(t).id : undefined,
  usuario: undefined
}

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case guardarToken: {
      return {
        ...state,
        token: action.payload,
        id: decode(action.payload).id
      }
    }
    case limpiarToken: {
      return {
        ...state,
        token: undefined
      }
    }
    case guardaUsuario: {
      return {
        ...state,
        usuario: action.payload
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

export const guardaUsuario = usuario => {
  return { type: guardaUsuario, payload: usuario }
}