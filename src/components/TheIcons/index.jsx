import React from 'react'
import IconSlider from '../IconSlider'

export default function Icon() {
  return (
    <div className="icon-section">
      <div className="icon-heading">
        <div className='heading-name'>The icons</div>
        <div className="dotted-line"><img src="/assets/svg/TheIcons/dottedline.svg" alt="" /></div>
      </div>
      <div className="icon-section-inner-wrapper">

        <div className="text-container">
          <Line className={'text-container-horizontal-line-top'} />
          <div className="text-container-inner-wrapper">


            <div className="text-container-heading"> <span>7,022 ICONS</span>  in total :</div>
            <div className="sub-heading">
              Each of these icons represent something unique
            </div>
            <div className="main-container">
              <div className='main-container-item'><img src="assets/svg/TheIcons/pointer.svg" alt="" />The movers </div>
              <div className='main-container-item'><img src="assets/svg/TheIcons/pointer.svg" alt="" />The Grinders</div>
              <div className='main-container-item'><img src="assets/svg/TheIcons/pointer.svg" alt="" />The Shakers </div>
              <div className='main-container-item'><img src="assets/svg/TheIcons/pointer.svg" alt="" />The Hustlers </div>
            </div>
            <div className="bottom-subheading sub-heading">But most importantly  The icons represent you</div>
            <div className="bottom-heading"><span>YOU </span>ARE THE COLLECTION</div>
          </div>
          <Line className={'text-container-horizontal-line-bottom'} />
          <Line className={'text-container-vertical-line'} />
        </div>
        <IconSlider />
      </div>
      <div className="lines-container">
        <Line className={'lines-container-horizontal-line'} />
        <div className='vertical-lines-container'>
          <Line className={'vertical-line'} />
          <Line className={'vertical-line'} />
          <Line className={'vertical-line'} />
          <Line className={'vertical-line'} />
          <Line className={'vertical-line'} />
          <Line className={'vertical-line'} />
          <Line className={'vertical-line'} />
          <Line className={'vertical-line'} />

        </div>

      </div>
      <CircleBox />
    </div>
  )
}

function CircleBox() {
  return (
    <div className="circle-box">
      <img src="/assets/svg/TheIcons/semi-circle.svg" alt="" />
      <img src="/assets/svg/TheIcons/circle.svg" alt="" />

    </div>
  )
}

function Line({ className = '' }) {
  return (
    <div className={`icons-line ${className}`}>

    </div>
  )
}
