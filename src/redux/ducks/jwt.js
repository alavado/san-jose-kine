import { decode } from "jsonwebtoken"

const guardarToken = 'jwt/guardarToken'
const limpiarToken = 'jwt/limpiarToken'

const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjZhMTVhODQxNWQwNjU1YmQ4YjJlMSIsImlhdCI6MTU5MzM1ODg2MiwiZXhwIjoxNTk1OTUwODYyfQ.wGU50cFishqU0kL-uFaADl6NP6bDHm2_O5eyXnLNLOw'

const defaultState = {
  token: false && window.location.href.indexOf('localhost') > 0 ? t : undefined,
  id: false && window.location.href.indexOf('localhost') > 0 ? decode(t).id : undefined
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