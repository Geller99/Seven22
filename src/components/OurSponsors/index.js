import React from 'react'

const OurSponsors = () => {
  return (
    <div className="our-sponsor-container">
      <div className="sponsor-heading">
        <div className='heading-name'>Partners & Sponsors</div>
        <div className="dotted-line"><img src="/assets/svg/faq-doted-line.svg" alt="" /></div>
      </div>
      <div className="sponsor-content">
        <div className="sponsor-content-wrapper">
          <div className="img-wrapper">
            <img src="/assets/images/dbc-brand.png" alt="dbc" />

          </div>
          <div className="img-wrapper">
            <img src="/assets/images/wsx.png" alt="wsx" />

          </div>
          <div className="img-wrapper">
            <img src="/assets/images/sord.png" alt="sord" />

          </div>
          <div className="img-wrapper w-300">
            <img src="/assets/images/logo.png" alt="logo" />

          </div>
        </div>
        <div className="sponsor-content-wrapper">
          <a href="https://www.instagram.com/smartera73/" target="_blank" rel="noreferrer">
            <div className="img-wrapper w-300">
              <img src="/assets/images/smartera.png" alt="logo" />

            </div>
          </a>
          <a href="https://users.digiebot.com/signup?referral_id=22988" target="_blank" rel="noreferrer">
            <div className="img-wrapper w-300">
              <img src="/assets/images/digieBot_logo.png" alt="logo" />

            </div>
          </a>
        </div>

      </div>

      <CircleBox />
    </div>
  )
}

export default OurSponsors;

function CircleBox() {
  return (
    <div className="circle-box">
      <img src="/assets/svg/TheIcons/semi-circle.svg" alt="" />
      <img src="/assets/svg/TheIcons/circle.svg" alt="" />

    </div>
  )
}