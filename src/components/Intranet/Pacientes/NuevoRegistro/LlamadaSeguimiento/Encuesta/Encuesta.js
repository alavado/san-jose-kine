import React, { useState } from 'react'
import { InlineIcon } from '@iconify/react'
import iconoFinalizar from '@iconify/icons-fa-solid/circle-notch'
import encuestaOriginal from './encuesta.json'
import './Encuesta.css'

const Encuesta = () => {

  const [indiceCategoria, setIndiceCategoria] = useState(0)
  const [encuesta, setEncuesta] = useState(encuestaOriginal)
  const categoria = encuesta.categorias[indiceCategoria]

  const responderAlternativa = (i, j) => {
    const alternativas = categoria.preguntas[i].alternativas
    encuesta.categorias[indiceCategoria].preguntas[i]
      .alternativas = alternativas
        .map((a, k) => ({ ...a, seleccionada: k === j }))
    setEncuesta({ ...encuesta })
  }

  return (
    <div className="Encuesta">
      <div className="Encuesta__progreso">
        <div>
          <h1 className="Encuesta__titulo">Seguimiento telefónico</h1>
            {encuesta.categorias.map((categoria, i) => (
              <div
                className={`Encuesta__selector_categoria${indiceCategoria === i ? ' Encuesta__selector_categoria--activa' : ''}`}
                onClick={() => setIndiceCategoria(i)}
              >
                {categoria.nombre}
              </div>
            ))}
          </div>
        <button
          className="Encuesta__boton_finalizar"
        >
          <InlineIcon
            className="LlamadaSeguimiento__icono_boton_comenzar"
            icon={iconoFinalizar}
          />
          Finalizar
        </button>
      </div>
      <div className="Encuesta__preguntas">
        <h1 className="Encuesta__titulo_preguntas">{categoria.nombre}</h1>
        {categoria.preguntas.map((pregunta, i) => (
          <div className="Encuesta__contenedor_pregunta">
            <div className="Encuesta__enunciado_pregunta">{i + 1}. {pregunta.enunciado}</div>
            {pregunta.alternativas.map((alternativa, j) => (
              <div
                className="Encuesta__alternativa"
                key={alternativa.id}
              >
                <label
                  className="Encuesta__label_alternativa"
                  htmlFor={`label-altenativa-${i}-${j}`}
                >
                  <input
                    id={`label-altenativa-${i}-${j}`}
                    type="radio"
                    checked={alternativa.seleccionada}
                    onClick={() => responderAlternativa(i, j)}
                  />
                  {alternativa.texto}
                </label>
              </div>
            ))}
            <div className="Encuesta__nota_pregunta">
              {pregunta.nota}
            </div>
          </div>
        ))}
      </div>
      <div className="Encuesta__observaciones">
        <h1 className="Encuesta__titulo">Observaciones</h1>
        <textarea
          className="Encuesta__textarea_observaciones"
          placeholder="Sin observaciones."
        >
        </textarea>
      </div>
    </div>
  )
}

export default Encuesta
