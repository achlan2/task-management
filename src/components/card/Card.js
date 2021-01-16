import React, { useState } from 'react'
import Dropdown from '../dropdown/Dropdown'
import './Card.css'

const Card = ({title, weight, id, position}) => {

  const [isOpen, setOpen] = useState(false)

  const dropdownToggle = (e)=>{
    e.preventDefault()
    setOpen(isOpen=>!isOpen)
  }

  return (
    <div className='card' key={id}>
      <h3 className="title">{title}</h3>
      <div className="action-container">
        <div className="weight">
          <img src="/icons/weight.svg" alt="weight-icon"/>
          <p>{weight}%</p>
        </div>
        <div className={ !isOpen ? "button-wrapper" : "button-wrapper grey"}>
          <button onClick={dropdownToggle}>
            <img src="/icons/dots.svg" alt="dot"/>
          </button>
          {isOpen && (
            <Dropdown position={position} onClose={()=>setOpen(false)} data={{title, weight}}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
