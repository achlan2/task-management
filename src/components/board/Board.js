import React, { useContext, useEffect, useState } from 'react'
import Modal from '../../layout/Modal'
import Card from '../card/Card'
import ManageTaskDialog from '../dialog/ManageTaskDialog'
import happyApi from '../../api/happy'
import {Context as TaskContext} from '../../context/TaskContext'

const Board = ({title, description,id, index, boardLength, nextId, prevId, moveTask}) => {

  const [cards, setCards] = useState([])
  const [test, setTest] = useState(false)

  const [isCreateOpen, setCreateOpen] = useState(false)
  const {fetchTaskPerBoard, state} = useContext(TaskContext)

  useEffect(() => {
    fetchTaskPerBoard(id)
  }, [])

  // console.log('state a',state);

  
  return (
    <div className='board' key={id} onClick={()=>setCards(cards=>[...cards, {id:1,title:'aduh',weight:5}])}>
      <h4>{title}</h4>
      <h4 className="description">{description}</h4>
      <div className="card-container">
        {cards.length !== 0 ?
          cards.map((card)=>(
            <Card key={card.id} title={card.title} weight={card.weight} id={card.id} position={index === 0 ? 'first' : index === boardLength-1 ? 'end' : 'center'} moveLeft={()=>moveTask(prevId,card.id)} moveRight={()=>moveTask(nextId,card.id)}/>
          ))
        :(
          <p className='no-task'>No Task Available</p>
        )}
      </div>
      <div className="add-wrapper" onClick={()=>setCreateOpen(true)}>
        <div className="img-wrapper">
          <img src="/icons/plus.svg" alt="plus-icon"/>
        </div>
        <p>Create new task</p>
      </div>
      <Modal open={isCreateOpen} onClose={()=>setCreateOpen(false)}>
        <ManageTaskDialog onClose={()=>setCreateOpen(false)} type='create'/>
      </Modal>
    </div>
  )
}

export default Board
