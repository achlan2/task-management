import React from 'react'

const Overlay = ({ callback }) => {
  return (
    <div className='overlay' onClick={callback} />
  )
}

export default Overlay
