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
                    <a href='https://play.google.com/store/games' target='_blank' rel="noreferrer" style={{'textDecoration':'none', 'color': 'black'}}>
                        <div className="google-play-btn">
                            
                            <div className="icon">
                                <img src="/assets/svg/google-play-icon.png" alt="google" />

                            </div>
                            <div className="btn-title" >Get from google play</div>
                            <div className="btn-title-mobile">google play</div>
                        </div>
                    </a>
                    <a href='https://play.google.com/store/games' target='_blank' rel="noreferrer" style={{'textDecoration':'none', 'color': 'black'}}>
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

            <div className="copyright-top-line"></div>
            <div className="copyright-container">
                <div className="text-container">
                    <p>© Seven22 Project 2022. All rights reserved.</p>
                </div>
                <div className="social-icon-container">
                    <a href='https://t.me/+NvY5I_lL9wtkZGI5' target='_blank' rel="noreferrer">
                        <div className="social-icon">
                            <img src="/assets/svg/telegram.svg" alt="instagram" />
                        </div>
                    </a>
                    <a href='https://www.instagram.com/seven22project/' target='_blank' rel="noreferrer">
                        <div className="social-icon">
                            <img src="/assets/svg/instagram.svg" alt="instagram" />
                        </div>
                    </a>

                    <a href='https://discord.gg/VJGKsXBZ58' target='_blank' rel="noreferrer">
                        <div className="social-icon">
                            <img src="/assets/svg/discord.svg" alt="instagram" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer