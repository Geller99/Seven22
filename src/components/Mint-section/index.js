import React from 'react'

const MintSection = () => {
    return (
        <div className="mint-section-container" id='themint'>
            <div className="mint-heading">
                <div className='heading-name'>The Mint</div>
                <div className="dotted-line"><img src="/assets/svg/faq-doted-line.svg" alt="" /></div>
            </div>
            <div className="mint-content-body">
                {/* <div className="horizontal-line"></div> */}
                {/* <div className="vertical-line"></div> */}
                <div className="mint-content-wrapper">
                    <div className="left-container">
                        <div className="items-wrapper">
                            <div className="item">
                                <img src="/assets/svg/right-arrow.svg" alt="arrow" />
                                <div className="desc">500 spots </div>
                            </div>
                            <div className="item">
                                <img src="/assets/svg/right-arrow.svg" alt="arrow" />
                                <div className="desc">Only 500 NFT will be reserved for the pre-sale </div>
                            </div>
                            <div className="item">
                                <img src="/assets/svg/right-arrow.svg" alt="arrow" />
                                <div className="desc">Price: 0.4279 eth</div>
                            </div>

                        </div>
                        <div className="items-footer-heading">
                            <h2>Pre-sale whitelist</h2>
                            <h3>July 31 07:22 pm EST</h3>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="items-wrapper">
                            <div className="item">
                                <img src="/assets/svg/right-arrow.svg" alt="arrow" />
                                <div className="desc">All the remaining assets not sold in pre-sale + 6,522 </div>
                            </div>
                            <div className="item">
                                <img src="/assets/svg/right-arrow.svg" alt="arrow" />
                                <div className="desc">
                                    Price: 0.8091 eth </div>
                            </div>


                        </div>
                        <div className="items-footer-heading">
                            <h2>Public Auction</h2>
                            <h3>August 22 07:22 pm EST</h3>
                        </div>
                    </div>
                </div>
            </div>
            <CircleBox />
        </div>
    )
}

export default MintSection;

function CircleBox() {
    return (
        <div className="circle-box">
            <img src="/assets/svg/TheIcons/semi-circle.svg" alt="" />
            <img src="/assets/svg/TheIcons/circle.svg" alt="" />

        </div>
    )
}