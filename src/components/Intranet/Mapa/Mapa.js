import React, { useState } from 'react'
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl'
import mapStyle from './mapStyle.json'
import './Mapa.css'
import { easeCubic } from 'd3-ease'

const Mapa = () => {

  const [vp, setVp] = useState({
    width: '100%',
    height: 'calc(100vh -2em)',
    bearing: 0.8438348482250375,
    pitch: 8.966012003230043,
    zoom: 15,
    latitude: -33.5978529,
    longitude: -70.7148546,
    altitude: 1.5,
    transitionInterpolator: new FlyToInterpolator(),
    transitionEasing: easeCubic
  })

  const cambioEnElViewport = vp => {
    setVp({
      ...vp,
      width: '100%',
      height: 'calc(100vh -2em)'
    })
  }

  return (
    <div className="Mapa">
      <ReactMapGL
        {...vp}
        mapStyle={mapStyle}
        onViewportChange={cambioEnElViewport}
      >
      </ReactMapGL>
    </div>
  )
}

export default Mapa
