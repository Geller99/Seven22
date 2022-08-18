import React from 'react'
import { ScrollBox } from '../HomePage';


export default function AboutUs() {
  return (

    <div className="about-us">
      <div className="about-us-inner-wrapper">
        <div className="heading">
          <div className='heading-name'>The Project</div>

          {/* using svg instead of text , unable to design text as it is shown in UI design*/}
          {/* <img src="/assets/svg/AboutUs/aboutus.svg" alt="" /> */}

          <img src="/assets/svg/AboutUs/dottedline.svg" className='dotted-line' alt="" />

        </div>
        <div className="main-container">
          <div className="text-container">
            <div className="text-heading">
              ETCHING HISTORY INTO THE BLOCKCHAIN
            </div>
            <div className="text-para">
              The blockchain will provide an indelible record of the beginning of The Movement that will reshape wealth in minority communities.<br /> <br/>
              The Seven22 Project takes us on a compelling journey through digital artwork to explore and showcase the cultural contributions made by Africans and African-Americans globally.
              <br /><br />
              Additionally, the project brings awareness to the struggles and obstacles as well as the progress and victories of early and present-day pioneers. By utilizing blockchain technology we will ensure that our history will be forever remembered. Finally, a future and a solution for wealth creation for the People.
            </div>
          </div>
          <div className="image-container-wrapper-mobile">

            <div className="image-container-wrapper">

            
            <div className="image-container-1">

              <img src="/assets/images/nft3.png" alt="" />
              <div className="lines">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="image-container-2">

              <img src="/assets/images/Rectangle 5.png" alt="" />
              <div className="lines">
                <div></div>
                <div></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollBox />
    </div>
  )
}





// @media (min-width: 768px) and (max-width: 1153px) {
//   position: static;
// }


// @media(max-width:1200px){
//   display: flex;
// }