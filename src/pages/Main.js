import React, { useEffect, useState } from 'react'
import Board from '../components/board/Board'
import happyApi from '../api/happy'

const Main = () => {

  const [boards, setBoards] = useState([])
  const [movedTask, setMovedTask] = useState(null)

  
  
  const moveTask = async (boardTarget, taskId) => {
    try {
      const response = await happyApi.put(`/tasks/${taskId}/move/target/${boardTarget}`)
      setMovedTask(movedTask=>response.data)
      console.log('movedTask',movedTask);
    } catch (e) {
    }
  }


  useEffect(() => {
    const fetch = async()=>{
      const response = await happyApi.get('/boards');
      setBoards(response.data)
    }

    fetch()
  }, [])

  return (
    <div className='main-container'>
      {boards.length !== 0 ? 
        boards.map((board, index)=>(

          <Board title={board.title} description={board.description} id={board.id} key={board.id} index={index} boardLength={boards.length} prevId={index === 0 ? null : boards[index-1].id} nextId={index === boards.length-1 ? null : boards[index+1].id} moveTask={moveTask}/>
          ))
          :null}
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
