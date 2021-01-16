import React, { useState } from 'react'
import Modal from '../../layout/Modal'
import Overlay from '../../layout/Overlay'
import DeleteDialog from '../dialog/DeleteDialog'
import './Dropdown.css'

const Dropdown = ({onClose, position}) => {
  const [isDeleteOpen, setDeleteOpen] = useState(false)
  const [isEditOpen, setEditOpen] = useState(false)

  return (
    <>
      <Overlay callback={onClose}/>
      <ul className="dropdown">
        {position === 'end' || position == 'center' ? (
          <li>
            <div className="img-wrapper">
              <img src="/icons/left-arrow.svg" alt="left-icon"/>
            </div>
            <p>Move Left</p>
          </li>
        ) : position === 'first' || position == 'center' ? (
          <li>
            <div className="img-wrapper">
              <img src="/icons/right-arrow.svg" alt="right-icon"/>
            </div>
            <p>Move Right</p>
          </li>
        ):null}
        <li onClick={()=>setEditOpen(true)}>
          <div className="img-wrapper">
            <img src="/icons/pencil.svg" alt="pencil-icon"/>
          </div>
          <p>Edit</p>
        </li>
        <li onClick={()=>setDeleteOpen(true)}>
          <div className="img-wrapper">
            <img src="/icons/drop.svg" alt="drop-icon"/>
          </div>
          <p>Delete</p>
        </li>
      </ul>
      <Modal open={isDeleteOpen} onClose={()=>setDeleteOpen(false)}>
        <DeleteDialog/>
      </Modal>
    </>
  )
}

export default Dropdown
