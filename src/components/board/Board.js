import React, { useContext, useEffect, useState } from 'react'
import Modal from '../../layout/Modal'
import Card from '../card/Card'
import ManageTaskDialog from '../dialog/ManageTaskDialog'
import { Context as TaskContext } from '../../context/TaskContext'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const Board = ({ title, description, id, indexBoard, boardLength, nextId, prevId }) => {

  const [listReady, setListReady] = useState(false)

  const [isCreateOpen, setCreateOpen] = useState(false)
  const { fetchTaskPerBoard, removeTask, moveTask, state } = useContext(TaskContext)

  useEffect(() => {
    fetchTaskPerBoard(id).then(() => setListReady(true))
  }, [])

  // console.log('board data', id, state[id])

  return (
    <div className='board' key={id}>
      <h4>{title}</h4>
      <h4 className="description">{description}</h4>
      <Droppable droppableId={`${id}`}>
        {(provided, snapshot) => (
          <div
            className="card-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {
              listReady && state[id].length !== 0 ?
                state[id].map((card, index) => (
                  <Card
                    key={card.id}
                    boardId={id}
                    title={card.title}
                    weight={card.weight}
                    id={card.id}
                    position={indexBoard === 0 ? 'first' : indexBoard === boardLength - 1 ? 'end' : 'center'}
                    moveLeft={() => moveTask(id, prevId, card)}
                    moveRight={() => moveTask(id, nextId, card)}
                    removeTask={() => removeTask(id, card.id)}
                    cardIndex={index}
                  />
                ))
                : (
                  <p className='no-task'>No Task Available</p>
                )
            }
            {provided.placeholder}
          </div>
        )}</Droppable>
      <div className="add-wrapper" onClick={() => setCreateOpen(true)}>
        <div className="img-wrapper">
          <img src="/icons/plus.svg" alt="plus-icon" />
        </div>
        <p>Create new task</p>
      </div>
      <Modal open={isCreateOpen} onClose={() => setCreateOpen(false)} isCreate={true}>
        <ManageTaskDialog onClose={() => setCreateOpen(false)} type='create' boardId={id} />
      </Modal>
    </div>
  )
}

export default Board
