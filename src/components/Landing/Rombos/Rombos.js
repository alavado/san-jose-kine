import React from 'react'
import './Rombos.css'

const Rombos = props => {
  return (
    <div className={`Rombos${props.desaparecen ? ' Rombos--desaparecen' : ''}`}>
      <div className="Rombos__rombo1"></div>
      <div className="Rombos__rombo2"></div>
    </div>
  )
}

export default Rombos
