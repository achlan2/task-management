import React from 'react'
import './styles.css'

const Overlay = ({ callback }) => {
  return (
    <div className='overlay' onClick={callback} />
  )
}

export default Overlay
