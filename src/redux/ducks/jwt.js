const guardarToken = 'jwt/guardarToken'

const defaultState = {
  token: ''
}

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case guardarToken: {
      return {
        ...state,
        token: action.payload
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
