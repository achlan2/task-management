import React from 'react'
import Card from '../card/Card'

const Board = ({title, subtitle}) => {
  return (
    <div className='board'>
      <h4>{title}</h4>
      <h4 className="subtitle">{subtitle}</h4>
      <div className="card-container">
        <Card title='Re-designed the zero-g doggie bags. No more spills!' weight='64' />
        <Card title='Re-designed the zero-g doggie bags. No more spills!' weight='64' />
      </div>
      <div className="add-wrapper">
        <div className="img-wrapper">
          <img src="/icons/plus.svg" alt="plus-icon"/>
        </div>
        <p>Create new task</p>
      </div>
    </div>
  )
}

export default Board
