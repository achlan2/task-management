import React, { useEffect, useState } from 'react'
import Board from '../components/board/Board'
import happyApi from '../api/happy'

const Main = () => {

  const [boards, setBoards] = useState([])

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
        boards.map(board=>(

          <Board title={board.title} description={board.description} id={board.id}/>
        ))
      :null}
    </div>
  )
}

export default Main
