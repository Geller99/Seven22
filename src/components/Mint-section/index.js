import React, { useEffect, useState } from 'react'
import useETHPrice from '../../hooks/useETHPrice';

const NFT_1_PRICE = 600.0;
const NFT_2_PRICE = 1200.0;

const MintSection = () => {
    const [preSalePrice1, setPreSalePrice1] = useState(null);
    const [preSalePrice2, setPreSalePrice2] = useState(null);

    const {
        fetchEthPrice
    } = useETHPrice()

    useEffect(() => {
        startFethingEthPrice();
        // price_tracker_intervalID = setInterval(startFethingEthPrice, 30000);
         // eslint-disable-next-line 
    }, [])

    const startFethingEthPrice = async () => {
        let price = await fetchEthPrice();
        let preSalePriceCalc1 = NFT_1_PRICE / price;
        let preSalePriceCalc2 = NFT_2_PRICE / price;
        preSalePriceCalc1 = preSalePriceCalc1?.toFixed(4)
        preSalePriceCalc2 = preSalePriceCalc2?.toFixed(4)
        setPreSalePrice1(preSalePriceCalc1)
        setPreSalePrice2(preSalePriceCalc2)
    }
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
                                <div className="desc">Only 500 NFTs are reserved for the pre-sale </div>
                            </div>
                            <div className="item">
                                <img src="/assets/svg/right-arrow.svg" alt="arrow" />
                                <div className="desc">Price: {preSalePrice1} eth</div>
                            </div>

                        </div>
                        <div className="items-footer-heading">
                            <h2>Pre-sale allowlist</h2>
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
                                    Price: {preSalePrice2} eth </div>
                            </div>


                        </div>
                        <div className="items-footer-heading">
                            <h2>Public Mint</h2>
                            <h3>9.7.22 7:22 PM EST</h3>
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