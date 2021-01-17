import React, { useContext, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Board from '../components/board/Board'
import { Context as BoardContext } from '../state/context/BoardContext'
import { Context as TaskContext } from '../state/context/TaskContext'

const Main = () => {

  const { fetchBoard, state } = useContext(BoardContext)
  const { dragTask } = useContext(TaskContext)

  useEffect(() => {
    fetchBoard()
  }, [])

  return (
    <DragDropContext onDragEnd={dragTask}>
      <div className='main-container'>
        {state.length !== 0 ?
          state.map((board, index) => (
            <Board
              title={board.title}
              description={board.description}
              id={board.id}
              key={board.id}
              indexBoard={index}
              boardLength={state.length}
              prevId={index === 0 ? null : state[index - 1].id}
              nextId={index === state.length - 1 ? null : state[index + 1].id}
            />
          ))
          : null}
      </div>
    </DragDropContext>
  )
}

export default Main
