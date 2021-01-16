import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({children, open, onClose}) => {
  if(!open) return null
  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}/>
      <div className="modal">
        {children}
      </div>
    </>,
    document.getElementById('modal')
  )
}

export default Modal

