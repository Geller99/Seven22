import React from 'react'

const TreasureCard = ({show}) => {
    return (
        <div className={`TreasureCard-container ${show?'active':''}`} id="treasure-rewards">
            <div className="TreasureCard-wrapper">
            <div className="card-title">
            Yep. We know what you’re looking for. So be first in line to Mint. Three of our 63 Rare 1 
of 1 NFTs, and 10 of our Super-Rare NFTs will have the HDN TREASURE attribute. Get on 
the list and set that alarm. Because if you snooze, you lose. Don’t come crying to us if
someone gets your Super-Rare. Just sayin’.
                </div>
                <div className="card-number-indicator">
                    <img src="/assets/images/Treasures-page/1-no.png" alt="" />
                </div>
                <div className="card-img-wrapper">
                    <img src="/assets/images/Treasures-page/Rectangle 90.png" alt="img" />

                    {/* effects */}
                    <div className="top-right-polygon-effect"></div>
                </div>
                <div className="card-title">
                    7 Platinum NFTs that will hold $15,000 in USDT
                </div>

                <div className="footer-horizontal-line">

                </div>
            </div>
            {/* 2 card */}
            <div className="TreasureCard-wrapper">
                <div className="card-number-indicator">
                    <img src="/assets/images/Treasures-page/2-no.png" alt="" />
                </div>
                <div className="card-img-wrapper">
                    <img src="/assets/images/Treasures-page/Rectangle 90 (1).png" alt="img" />

                    {/* effects */}
                    <div className="top-right-polygon-effect"></div>
                </div>
                <div className="card-title">
                    3 Diamond NFTs that will hold 1 of 3 vehicles (Mercedes EQS, Jeep Wrangler, Tesla Model S)
                </div>

                <div className="footer-horizontal-line">

                </div>
            </div>
            {/* 3 card */}
            <div className="TreasureCard-wrapper">
                <div className="card-number-indicator">
                    <img src="/assets/images/Treasures-page/3-no.png" alt="" />
                </div>
                <div className="card-img-wrapper">
                    <img src="/assets/images/Treasures-page/Rectangle 90 (2).png" alt="img" />

                    {/* effects */}
                    <div className="top-right-polygon-effect"></div>
                </div>
                <div className="card-title">
                    3 of our Rare 63 1of1’s and 10 Super Rare NFTs will have the HDN Treasure attribute.
                </div>

                <div className="footer-horizontal-line">

                </div>
            </div>
            {/* 4 card */}
            <div className="TreasureCard-wrapper">
                <div className="card-number-indicator">
                    <img src="/assets/images/Treasures-page/4-no.png" alt="" />
                </div>
                <div className="card-img-wrapper">
                    <img src="/assets/images/Treasures-page/Rectangle 90 (3).png" alt="img" />

                    {/* effects */}
                    <div className="top-right-polygon-effect"></div>
                </div>
                <div className="card-title">
                    3 Gold NFTs will hold 3 Amazon Stores (courtesy of DBC)
                </div>


            </div>
        </div>
    )
}

export default TreasureCard