import React from 'react'
import './Login.css'
import { useHistory } from 'react-router'

const Login = () => {

  const history = useHistory()

  const login = e => {
    e.preventDefault()
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
              onClick={() => history.push('/intranet')}
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
