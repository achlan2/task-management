import React, { useContext, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Board from '../components/board/Board'
import { Context as BoardContext } from '../context/BoardContext'

const Main = () => {

  const { fetchBoard, state } = useContext(BoardContext)

  useEffect(() => {
    fetchBoard()
  }, [])

  return (
    <DragDropContext onDragEnd={(result) => {
      console.log('result.source')
    }}
      onDragStart={() => console.log('drag')}
    >
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
