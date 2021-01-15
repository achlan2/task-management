import React from 'react'

const Board = ({title, subtitle}) => {
  return (
    <div className='board'>
      <h4>{title}</h4>
      <h4 className="subtitle">{subtitle}</h4>
    </div>
  )
}

export default Board
