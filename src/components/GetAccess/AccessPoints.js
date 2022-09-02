import React from 'react'

function AccessPoints({data}) {
  return (
    <div className='access-points'>
        <div className='frame-100'>
            <div className='ellipse-48'></div>
            <div className='ellipse-47'></div>
        </div>
        <div className='content'>
            {data}
        </div>
    </div>
  )
}

export default AccessPoints