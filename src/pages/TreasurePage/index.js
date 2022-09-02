import React, { useEffect, useState } from 'react'
import TreasureCard from './TreasureCard';

const TreasurePage = () => {
    const element = document.getElementById("treasure-rewards");
    const [showHint, setShowHint] = useState(false)
    const [showReward, setShowReward] = useState(false)

    const startScroll = () => {
        setShowReward(true)
        element.scrollIntoView();
    }
    useEffect(() => {
        if (showReward) {

            element.scrollIntoView();
        }
         // eslint-disable-next-line 
    }, [showReward])


    const showHintDailougeBox = () => {
        setTimeout(() => {
            setShowHint(true)
        }, 500)
    }

    useEffect(() => {
        showHintDailougeBox()
    }, [])

    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="treasure-page-container">
            <div className="treasure-landing-page-container">
                <div className="img-wrapper" onClick={startScroll}>

                  
                        <div className={`dialog-box ${showHint?'active':''}`} >

                            <div className="outer-circle">
                                <div className="circle"></div>
                            </div>
                            <div className="line-vertical">
                                <img src="/assets/images/Treasures-page/Line 114.png" alt="Line" />
                            </div>
                            <div className="click-to-see-alert">
                                Click to see what we have in store for you
                            </div>

                        </div>

                    <img src="/assets/images/Treasures-page/treasure-chest 1.png" alt="treasure-chest" />
                </div>
            </div>
            <TreasureCard show={showReward} />
        </div>
    )
}

export default TreasurePage;