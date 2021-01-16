import React, { useEffect, useState } from 'react'

const ManageTaskDialog = ({onClose, type, data}) => {

  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')

  useEffect(() => {
    if(type!=='create'){
      setName(data.title)
      setWeight(data.weight)
    }
  }, [])

  return (
    <div className='dialog dialog-manage-task'>
      <div className="dialog-header">
        <h2>{type==='create' ? 'Create Task' : 'Edit Task'}</h2>
        <img className='close' src="/icons/close.svg" alt="close-icon" onClick={onClose} />
      </div>
      <div className="form">
        <div className="form-control">
          <p className='label'>Task Name</p>
          <input type="text" placeholder='exampe: Build rocket to Mars.' className='block' value={name} onChange={(value)=>setName(value)}/>
        </div>
        <div className="form-control">
          <p className='label'>Weight</p>
          <div className="weight-wrapper">
            <input type="text" placeholder='0' className='input-weight' value={weight} onChange={(value)=>setWeight(value)}/> %
          </div>
        </div>
        <div className="button-wrapper">
          <button className="clear" onClick={onClose}>Cancel</button>
          <button className="primary">Save Task</button>
        </div>
      </div>
    </div>
  )
}

export default ManageTaskDialog
