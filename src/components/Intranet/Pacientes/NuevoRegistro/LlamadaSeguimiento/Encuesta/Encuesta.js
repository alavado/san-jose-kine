import React, { useState } from 'react'
import encuesta from './encuesta.json'
import './Encuesta.css'

const Encuesta = () => {

  const [indiceCategoria, setIndiceCategoria] = useState(0)
  const categoria = encuesta.categorias[indiceCategoria]

  return (
    <div className="Encuesta">
      <div className="Encuesta__progreso">
        <h1 className="Encuesta__titulo">Secciones</h1>
        {encuesta.categorias.map((categoria, i) => (
          <div
            className={`Encuesta__selector_categoria${indiceCategoria === i ? ' Encuesta__selector_categoria--activa' : ''}`}
            onClick={() => setIndiceCategoria(i)}
          >
            {categoria.nombre}
          </div>
        ))}
        <button>Finalizar</button>
      </div>
      <div className="Encuesta__preguntas">
        <h1 className="Encuesta__titulo"></h1>
        {categoria.preguntas.map(pregunta => (
          <div>
            <div>{pregunta.enunciado}</div>
            {pregunta.alternativas.map(alternativa => (
              <div>{alternativa.texto}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="Encuesta__observaciones">
        <h1 className="Encuesta__titulo">Observaciones</h1>
        <textarea
          className="Encuesta__textarea_observaciones"
          placeholder="La llamada transcurre de manera normal"
        >
        </textarea>
      </div>
    </div>
  )
}

export default Encuesta
