import React from 'react'

const DeleteDialog = ({onClose}) => {
  return (
    <div className='dialog dialog-delete'>
      <div className="dialog-header">
        <h2>Delete Task</h2>
        <img className='close' src="/icons/close.svg" alt="close-icon" onClick={onClose} />
      </div>
      <p>Are you sure want to delete this task? your action can't be reverted.</p>
      <div className="button-wrapper">
        <button className="clear" onClick={onClose}>Cancel</button>
        <button className="danger">Delete</button>
      </div>
    </div>
  )
}

export default DeleteDialog
