import React, { useContext, useEffect, useState } from 'react'
import Board from '../components/board/Board'
import happyApi from '../api/happy'
import { Context as BoardContext } from '../context/BoardContext'

const Main = () => {

  const [movedTask, setMovedTask] = useState(null)

  const { fetchBoard, state } = useContext(BoardContext)

  useEffect(() => {
    fetchBoard()
  }, [])

  const moveTask = async (boardTarget, taskId) => {
    try {
      const response = await happyApi.put(`/tasks/${taskId}/move/target/${boardTarget}`)
      setMovedTask(movedTask => response.data)
      console.log('movedTask', movedTask);
    } catch (e) {
    }
  }

  return (
    <div className='main-container'>
      {state.length !== 0 ?
        state.map((board, index) => (

          <Board title={board.title} description={board.description} id={board.id} key={board.id} index={index} boardLength={state.length} prevId={index === 0 ? null : state[index - 1].id} nextId={index === state.length - 1 ? null : state[index + 1].id} moveTask={moveTask} />
        ))
        : null}
      {/* {boards.length !== 0 ? 
        boards.map((board, index)=>(

          <Board title={board.title} description={board.description} id={board.id} key={board.id} index={index} boardLength={boards.length}/>
          ))
          :null} */}
      {/* <Board title={boards[0].title} description={boards[0].description} id={boards[0].id} key={boards[0].id} index={0} boardLength={boards.length}/>
          <Board title={boards[2].title} description={boards[2].description} id={boards[2].id} key={boards[2].id} index={0} boardLength={boards.length}/> */}
    </div>
  )
}

export default Main
