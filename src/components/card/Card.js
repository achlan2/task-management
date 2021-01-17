import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Dropdown from '../dropdown/Dropdown'
import './Card.css'

const Card = ({ title, weight, id, position, moveLeft, moveRight, removeTask, boardId, cardIndex }) => {

  const [isOpen, setOpen] = useState(false)

  const dropdownToggle = (e) => {
    e.preventDefault()
    setOpen(isOpen => !isOpen)
  }


  return (
    <Draggable draggableId={`${id}`} index={cardIndex}>
      {provided => (

        <div
          className='card'
          key={`${id}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3 className="title">{title}</h3>
          <div className="action-container">
            <div className="weight">
              <div className="weight-wrapper">
                <img src="/icons/weight.svg" alt="weight-icon" />
              </div>
              <p>{weight}%</p>
            </div>
            <div className={!isOpen ? "button-wrapper" : "button-wrapper grey"}>
              <button onClick={dropdownToggle}>
                <img src="/icons/dots.svg" alt="dot" />
              </button>
              {isOpen && (
                <Dropdown
                  position={position}
                  onClose={() => setOpen(false)}
                  data={{ title, weight, id }}
                  moveLeft={moveLeft}
                  moveRight={moveRight}
                  removeTask={removeTask}
                  boardId={boardId}
                  cardIndex={cardIndex}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card
