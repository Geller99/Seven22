import React from 'react'
import { Link} from "react-router-dom";

const JoinCommunity = () => {
    return (
        <div className="join-community-section">
            <div className="join-community-container">
                <div className="join-community-inner-wrapper">
                    <div className="left-container">
                        <div className="join-community-title">
                            <h1>Join the culture</h1>
                            {/* <p className="desc">
                                Join our community
                            </p> */}
                        </div>
                        <div className="join-cta">
                            <div className="twitter-btn">
                                <span>Twitter</span>
                                <div className="twitter-btn-line-1"></div>
                                <div className="twitter-btn-line-2"></div>
                            </div>
                            <div className="Discord-btn">
                                <div className="discord-btn-line-top-right-1"></div>
                                <div className="discord-btn-line-top-right-2"></div>
                                <span>Discord</span>
                                <div className="discord-btn-line-1"></div>
                                <div className="discord-btn-line-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="text-content-wrapper-1">
                            <p>As fully decentralised project, we dedicate a great part of our efforts into improving and growing the best community blockchain has ever seen. Join us during this journey to raise awareness for those who deserve it and make money while you do it. The hustle never stops</p>
                        </div>
                        <div className="text-content-wrapper-2">
                            <p>
                                <span>Earn a Spot in Our Presale</span>
                                If you want to join our Whitelist and get the chance to earn a high-rank NFT at a discounted price, just subscribe to our email and follow us on Instagram and Twitter.</p>
                        </div>
                    </div>

                    <div className="mint-now-btn">
                        <div className="mint-btn-line-top-right-1"></div>
                        <div className="mint-btn-line-top-right-2"></div>
                        <Link className='link-class' to="/mint">  <span>Mint now</span></Link>
                        <div className="mint-btn-line-1"></div>
                        <div className="mint-btn-line-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinCommunity;