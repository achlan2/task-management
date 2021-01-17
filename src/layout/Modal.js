import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ children, open, onClose, isCreate }) => {
  // if (!open) return null
  return ReactDOM.createPortal(
    <div className={open ? isCreate ? 'modal-show-animated' : 'modal-show' : 'modal-hide'}>
      <div className="modal-overlay" onClick={onClose} />
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export default Modal

