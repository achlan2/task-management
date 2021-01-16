import React, { useEffect, useState } from 'react'
import Modal from '../../layout/Modal'
import Card from '../card/Card'
import ManageTaskDialog from '../dialog/ManageTaskDialog'
import happyApi from '../../api/happy'

const Board = ({title, description,id, index, boardLength}) => {

  const [cards, setCards] = useState([])

  const [isCreateOpen, setCreateOpen] = useState(false)

  useEffect(() => {
    const fetch = async()=>{
      const response = await happyApi.get(`/boards/${id}/tasks`);
      console.log(response.data)
      setCards(response.data)
    }

    fetch()
  }, [])

  return (
    <div className='board' key={id}>
      <h4>{title}</h4>
      <h4 className="description">{description}</h4>
      <div className="card-container">
        {cards.length !== 0 ?
          cards.map((card)=>(
            <Card key={card.id} title={card.title} weight={card.weight} id={card.id} position={index === 0 ? 'first' : index === boardLength-1 ? 'end' : 'center'}/>
          ))
        :(
          <p>No Task Available</p>
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
