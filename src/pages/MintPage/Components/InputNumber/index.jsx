import React, { useState } from 'react'

export default function InputNumber( props ) {
  const handleChange = (evt, mod) => {
    const newQuantity = props.mintQuantity + mod;
    if( 0 < newQuantity && newQuantity <= 20 ){
      props.setMintQuantity( newQuantity );
    }
  };

  return (
    <div className="input-number">
      <div className='input-container'>
        <div className="input-text">{props.mintQuantity}</div>
        {/* <input type="text" placeholder={value} readOnly /> */}
      </div>
      <div className="arrow-container">
        <div className="img-wrapper-1"  onClick={evt => handleChange( evt, 1 )}>

          <img src="/assets/svg/Mint-page/up-arrow-small.svg" alt="up-arrow" />
        </div>
        <div className="img-wrapper-2" onClick={evt => handleChange( evt, -1 )}>
          <img src="/assets/svg/Mint-page/down-arrow-small.svg" alt="down-arrow" />
        </div>


      </div>
    </div>
  )
}
