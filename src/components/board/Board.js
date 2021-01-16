import React, { useState } from 'react'
import Modal from '../../layout/Modal'
import Card from '../card/Card'
import ManageTaskDialog from '../dialog/ManageTaskDialog'

const Board = ({title, subtitle}) => {

  const [isCreateOpen, setCreateOpen] = useState(false)

  return (
    <div className='board'>
      <h4>{title}</h4>
      <h4 className="subtitle">{subtitle}</h4>
      <div className="card-container">
        <Card title='Re-designed the zero-g doggie bags. No more spills!' weight='64' />
        <Card title='Re-designed the zero-g doggie bags. No  spills!' weight='64' />
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
