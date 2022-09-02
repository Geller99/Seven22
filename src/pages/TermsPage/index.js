import React, { useEffect } from 'react'

const Terms = () => {

    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
         // eslint-disable-next-line 
    }, [1])
    return (
        <div className="terms-container">
            <div className="terms-header">
                <div className="heading">
                    Terms and conditions
                </div>
                <div className="desc">THese should guide you</div>
            </div>
            <div className="divider-line"></div>
            <div className="vertical-right-line"></div>

            <div className="terms-content-wrapper">
                <div className="terms-intro">
                    <p>
                    Please read these Terms of Use (the “Terms”) carefully because they govern your use of the website located at https://seven22.io/ and the content and functionalities accessible via the Site (collectively, the “Site”) offered by Seven22 Project (“Seven22 Project”).
                    </p>
                    <p>
                    Seven22 Project maintains the Site as a portal for information, news and updates about the non-fungible tokens known as “HDN FIGRZs.” These Terms govern your use of the Site. 
                    In addition, if you hold a HDN FIGRZ, your acquisition, use, and transfer of that HDN FIGRZ (and art linked to it) will be subject to and governed by the HDN FIGRZs NFT Terms.
                    For the avoidance of doubt, Seven22 Project does not control the Ethereum blockchain protocol (“Protocol”) on which HDN FIGRZs are tradable or useable and cannot control activity and data on the Protocol, the validation of transactions on the Protocol, or use of the Protocol. 
                    </p>

                    <p>
                    IMPORTANT NOTICE REGARDING ARBITRATION: WHEN YOU AGREE TO THESE TERMS YOU ARE AGREEING (WITH LIMITED EXCEPTION) TO RESOLVE ANY DISPUTE BETWEEN YOU AND SEVEN22 PROJECT THROUGH BINDING, INDIVIDUAL ARBITRATION RATHER THAN INCOURT.
                     PLEASE REVIEW CAREFULLY SECTION 14 “DISPUTE RESOLUTION” BELOW FOR DETAILS REGARDING ARBITRATION. HOWEVER, IF YOU ARE A RESIDENT OF A JURISDICTION WHERE APPLICABLE LAW PROHIBITS ARBITRATION OF DISPUTES, THE AGREEMENT TO ARBITRATE IN SECTION 14 WILL NOT APPLY TO YOU BUT THE PROVISIONS OF SECTION 13 (GOVERNING LAW AND FORUM CHOICE) OR RELEVANT PROVISIONS OF APPLICABLE LAW WILL STILL APPLY.
                    </p>


                    <p>
                        Regardig OWNERSHIP, PERSONAL USE, COMMERCIAL USE AND COMPLIANCE - PLEASE READ OUR OFFICIAL TERMS AND CONDITIONS 
                    </p>
                </div>

                {/* <div className="terms-points">
                    <div className="point-heading">
                        i. Ownership
                    </div>
                    <div className="point-desc">
                        You Own the NFT. Each HDN FIGRZ Collectable is an NFT on the Ethereum blockchain. When you purchase an NFT, you own the underlying HDN FIGRZ Collectable and the art. Ownership of the NFT is mediated entirely by the Smart Contract and the Ethereum Network: at no point may we seize, freeze, or otherwise modify the ownership of any HDN FIGRZ Collectable.
                    </div>
                </div>
                <div className="terms-points">
                    <div className="point-heading">
                        ii. Personal Use.
                    </div>
                    <div className="point-desc">
                        Subject to your continued compliance with these Terms, WSX, LLC grants you a worldwide, royalty-free license to use, copy, and display the purchased NFT, along with any extensions that you choose to create or use, solely for the following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace the permits the purchase and sale of your HDN FIGRZ Collectable/ NFT, provided that the marketplace cryptographically verifies each HDN FIGRZ Collectable owner’s rights to display the art for their HDN FIGRZ Collectable to ensure that only the actual owner can display the art; or (iii) as part of a third party website or application that permits the inclusion, involvement, or participation of your HDN FIGRZ Collectable, provided that the website/application cryptographically verifies each HDN FIGRZ Collectable owner’s rights to display the Art for their HDN FIGRZ Collectable to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the HDN FIGRZ Collectable leaves the website/application.
                    </div>
                </div>
                <div className="terms-points">
                    <div className="point-heading">
                        iii. Commercial Use
                    </div>
                    <div className="point-desc">
                        . Subject to your continued compliance with these Terms, WSX, LLC grants you an unlimited, worldwide license to use, copy, and display the purchased Art for the purpose of creating derivative works based upon the Art (“Commercial Use”). Examples of such Commercial Use would e.g. be the use of the Art to produce and sell merchandise products (T-shirts etc.) displaying copies of the Art. For the sake of clarity, nothing in this Section will be deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of HDN FIGRZ Collectable generally, provided that the marketplace cryptographically verifies each HDN FIGRZ Collectable owner’s rights to display the Art for their HDN FIGRZ Collectable to ensure that only the actual owner can display the Art; (iii) owning or operating a third party website or application that permits the inclusion, involvement, or participation of Seven22 generally, provided that the third party website or application cryptographically verifies each HDN FIGRZ Collectable owner’s rights to display the Art, and provided that the Art is no longer visible once the owner of the Purchased HDN FIGRZ Collectable leaves the website/application; or (iii) earning revenue from any of the foregoing.
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default Terms;