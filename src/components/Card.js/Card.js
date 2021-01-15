import React from 'react'
import './Card.css'

const Card = ({title, weight}) => {
  return (
    <div className='card'>
      <h3 className="title">{title}</h3>
      <div className="action-container">
        <div className="weight">
          <img src="/icons/weight.svg" alt="weight-icon"/>
          <p>{weight}%</p>
        </div>
        <button>
          <img src="/icons/dots.svg" alt="dot"/>
        </button>
      </div>
    </div>
  )
}

export default Card
