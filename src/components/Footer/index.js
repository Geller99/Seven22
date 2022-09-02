import React from 'react'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-header">
                <img src="/assets/svg/dashed-big-line-footer.svg" alt="dashed" />
                {/* <div className="dash-line"></div> */}
            </div>
            <div className="footer-content-wrapper">
                <div className="logo-container">
                    <img src="/assets/images/rotate-text1-with-logo.png" alt="rotate" />
                </div>
                <div className="text-content-container">
                    <div className="text-content">
                        <div>Defi wallet The official </div>
                        <div> Partner of the seven project.</div>
                    </div>
                    <div className="line-divider"></div>
                    <div className="cta-action-container">
                    <a href='https://play.google.com/store/apps/details?id=com.app.defiwallet' target='_blank' rel="noreferrer" style={{'textDecoration':'none', 'color': 'black'}}>
                        <div className="google-play-btn">
                            
                            <div className="icon">
                                <img src="/assets/svg/google-play-icon.png" alt="google" />

                            </div>
                           <div className="btn-title" >Get from google play</div>
                            <div className="btn-title-mobile">google play</div>
                        </div>
                    </a>
                    <a href='https://defiwalletswap.com/' target='_blank' rel="noreferrer" style={{'textDecoration':'none', 'color': 'black'}}>
                        <div className="apple-btn">
                            <div className="icon">
                                <img className='icon-apple' src="/assets/svg/apple4x.png" alt="google" />

                            </div>
                            <div
                                className="btn-title"
                            >Get from App store</div>
                            <div className="btn-title-mobile">App store</div>

                        </div>
                    </a>
                        
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Footer