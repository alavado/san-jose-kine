import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { InlineIcon } from '@iconify/react'
import seniorIcon from '@iconify/icons-vs/senior'
import './MiniaturaListaPacientes.css'
import { nombreAleatorio } from '../../../../helpers/nombres'
import { shuffle } from 'lodash'

axios.defaults.headers.common['X-API-KEY'] = '92f91323e700258c0fb7811bcfd84f'
const categorias = [
  {
    nombre: 'Extremadamente vulnerables',
    color: '#c53c30'
  },
  {
    nombre: 'Muy vulnerables',
    color: '#c58230'
  },
  {
    nombre: 'Vulnerables',
    color: '#c5c030'
  },
  {
    nombre: 'Poco vulnerables',
    color: '#a5c530'
  },
  {
    nombre: 'Sin riesgo actual',
    color: '#55c530'
  }
]

const MiniaturaListaPacientes = () => {

  const [pacientes, setPacientes] = useState([])

  useEffect(() => {
    async function fetchPacientes() {
      const { data: pacientesM } = await axios.get('https://uifaces.co/api?from_age=60&to_age=100&gender[]=male&limit=15')
      const { data: pacientesF } = await axios.get('https://uifaces.co/api?from_age=60&to_age=100&gender[]=female&limit=15')
      setPacientes(
        shuffle([...pacientesM.map(d => ({ ...d, g: 'm' })), ...pacientesF.map(d => ({ ...d, g: 'f' }))])
          .map((d, i) => ({
            nombre: nombreAleatorio(d.g),
            foto: d.photo,
            score: (10 - i * .3).toLocaleString('de-DE'),
            edad: Math.floor(60 + 35 * Math.random()) 
        }))
      )
    }
    fetchPacientes()
  }, [])

  if (pacientes.length === 0) {
    return null
  }

  const pacientesPorCategoria = pacientes.length / categorias.length

  return (
    <div className="MiniaturaListaPacientes">
      {categorias.map((categoria, i) => (
        <div
          className="MiniaturaListaPacientes__contenedor_categoria"
          key={`contenedor-categoria-${i}`}
        >
          <div
            className="MiniaturaListaPacientes__encabezado_categoria"
            style={{ backgroundColor: categoria.color }}
          >
            <div className="MiniaturaListaPacientes__encabezado_categoria_izquierda">
              <InlineIcon icon={seniorIcon} />
              <h1 className="MiniaturaListaPacientes__titulo_categoria">{categoria.nombre}</h1>
            </div>
            <div className="MiniaturaListaPacientes__encabezado_categoria_derecha">
              score
            </div>
          </div>
          <div className="MiniaturaListaPacientes__categoria">
            {pacientes.slice(i * pacientesPorCategoria, (i + 1) * pacientesPorCategoria).map((p, i) => (
              <div
                key={`miniatura-paciente-${i}`}
                className="MiniaturaListaPacientes__fila"
              >
                <div className="MiniaturaListaPacientes__fila_seccion_izquierda">
                  <img
                    className="MiniaturaListaPacientes__avatar"
                    src={p.foto}
                    alt={`foto del paciente ${p.nombre}`}
                  />
                  <div className="MiniaturaListaPacientes__datos">
                    <div className="MiniaturaListaPacientes__nombre">{p.nombre}</div>
                    <div className="MiniaturaListaPacientes__edad">{p.edad} años</div>
                  </div>
                </div>
                <div
                  className="MiniaturaListaPacientes__score"
                  style={{ backgroundColor: categoria.color }}
                >
                  {p.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MiniaturaListaPacientes
