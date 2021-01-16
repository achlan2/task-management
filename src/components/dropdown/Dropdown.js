import React from 'react'
import Overlay from '../../layout/Overlay'
import './Dropdown.css'

const Dropdown = ({onClose, position}) => {
  return (
    <>
      <Overlay callback={onClose}/>
      <ul className="dropdown">
        {position === 'end' || position == 'center' ? (
          <li>
            <img src="/icons/left-arrow.svg" alt="left-icon"/>
            <p>Move Left</p>
          </li>
        ) : position === 'first' || position == 'center' ? (
          <li>
            <img src="/icons/right-arrow.svg" alt="right-icon"/>
            <p>Move Right</p>
          </li>
        ):null}
        <li>
          <img src="/icons/pencil.svg" alt="pencil-icon"/>
          <p>Edit</p>
        </li>
        <li>
          <img src="/icons/drop.svg" alt="drop-icon"/>
          <p>Delete</p>
        </li>
      </ul>
    </>
  )
}

export default Dropdown
