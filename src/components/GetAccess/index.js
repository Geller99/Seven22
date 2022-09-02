import React from 'react'
import CardSlider from '../CardSlider'
import AccessPoints from './AccessPoints'
import DebitCard from './DebitCard'
const point_list = [
    "The One Percent Access Card (exclusive member rates on travel & VIP pricing at restaurants and retailers globally.",
    "Lifetime Access to the One Percent Trade Room w/Dr.ChrisColeIAM",
    "Lifetime Quarterly Reflections",
    "Over 300 hours of Trading and Wealth Building Education",
    "Automated Trading EA System on WSXPRO.com",
    "Access to Private Events and future drops",
]
const point_list_LEN = point_list.length
function GetAccess() {
    return (
        <div className='get-access'>
            <div className='heading-section'>
                <div className='main-heading'>
                    <div className='seperator left'></div>
                    <div className='name'>
                        <div className="main">Get Access</div>
                        <div className="sub">Every NFT holder gains instant access to The Seven22 Private Wealth Club.<br />Membership includes:</div>
                    </div>
                    <div className='seperator right'></div>
                </div>
            </div>
            {/* <AccessStrips /> */}
            <div className='effect-boundary'>
                    <img className='polygon-7' src="/assets/images/DebitCard/Polygon-7.png" alt=""/>

                <div className='access-content'>
                    <div className='left-points'>
                        {point_list.slice(0, point_list_LEN / 2).map((item, index) => {
                            return <AccessPoints data={item} key={index} />
                        })}
                    </div>
                    <DebitCard />
                    <div className='right-points'>
                        {point_list.slice(point_list_LEN / 2, point_list_LEN).map((item, index) => {
                            return <AccessPoints data={item} key={index} />
                        })}
                    </div>
                </div>
                
                <CardSlider slides={point_list}/>
            </div>
            {/* <AccessStrips /> */}
        </div>
    )
}

export default GetAccess