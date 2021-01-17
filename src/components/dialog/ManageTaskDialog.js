import React, { useContext, useEffect, useState } from 'react'
import { Context as TaskContext } from '../../context/TaskContext'

const ManageTaskDialog = ({ onClose, type, data, boardId, index }) => {

  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')

  const { addTask, editTask } = useContext(TaskContext)

  useEffect(() => {
    if (type !== 'create') {
      setName(data.title)
      setWeight(data.weight)
    }
  }, [])

  const submitHandler = (e) => {

    const numValidate = /^\d+$/
    let formData = {}
    if (numValidate.test(weight)) {
      formData = {
        title: name,
        weight
      }
    } else {
      formData = {
        title: name,
        weight: data.weight
      }
    }

    if (type === 'create') {
      addTask(boardId, formData)
    } else {
      editTask(data.id, boardId, formData, index)
    }
    onClose()
  }


  return (
    <div className='dialog dialog-manage-task'>
      <div className="dialog-header">
        <h2>{type === 'create' ? 'Create Task' : 'Edit Task'}</h2>
        <img className='close' src="/icons/close.svg" alt="close-icon" onClick={onClose} />
      </div>
      <div className="form">
        <div className="form-control">
          <p className='label'>Task Name</p>
          <input type="text" placeholder='example: Build rocket to Mars.' className='block' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-control">
          <p className='label'>Weight</p>
          <div>
            <input type="text" placeholder='0' className='input-weight' value={weight} onChange={(e) => setWeight(e.target.value)} /> %
          </div>
        </div>
        <div className="button-wrapper">
          <button className="clear" onClick={onClose}>Cancel</button>
          <button className="primary" onClick={submitHandler}>Save Task</button>
        </div>
      </div>
    </div>
  )
}

export default ManageTaskDialog
