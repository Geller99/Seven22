import React from 'react'

function AccessStrips() {
  return (
    <div className='access-strips'>
        {new Array(50).fill().map((_, index) => {
        return <div className='access-strip-item' key={index}>ACCESS</div>
        })}
    </div>
  )
}

export default AccessStrips