import React from 'react'

const SocialMediafooter = () => {
    return (
        <>
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
        </>
    )
}

export default SocialMediafooter;