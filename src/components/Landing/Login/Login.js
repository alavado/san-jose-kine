import React from 'react'
import './Login.css'
import { useHistory } from 'react-router'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';
import { recibiToken } from '../../../redux/ducks/jwt';

const mutationLogin = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: {
      identifier: $identifier,
      password: $password
    }) {
      jwt
    }
  }
`;

const Login = () => {

  const history = useHistory()
  const [login, { data }] = useMutation(mutationLogin);
  const dispatch = useDispatch()

  const enviarFormulario = e => {
    e.preventDefault()
    login({
      variables: {
        identifier: 'ale615',
        password: 'asd123'
      }
    })
      .then(res => {
        const token = res.data.login.jwt
        dispatch(recibiToken(token))
        history.push('/intranet')
      })
      .catch(console.error)
  }

  return (
    <div className="Login">
      <div className="Login__contenedor">
        <div className="Login__logo">Acceso</div>
        <form className="Login__formulario" onSubmit={login}>
          <div className="Login__campo">
            <label>E-mail</label>
            <input className="Login__input" type="text" />
          </div>
          <div className="Login__campo">
            <label>Contraseña</label>
            <input className="Login__input" type="password" />
          </div>
          <div className="Login__campo">
            <button
              className="Login__boton"
              type="submit"
              onClick={enviarFormulario}
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
