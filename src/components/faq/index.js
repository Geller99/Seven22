import React, { useState } from 'react'


const Faq = () => {

    // faq dummy data 
    const faqData = [
        // {
        //     question: 'WHAT IS THE SEVEN22 PROJECT?',
        //     answer: 'SEVEN22 PROJECT (SEVEN22) is a digital collection of 7,022 unique NFTs; an invite-only community and collective of elite members who share a community-first mindset and are focused on spreading peace throughout the ecosystem with community giveaways and charitable models.  '
        // },
        {
            question: 'WHEN IS THE LAUNCH DATE ?',
            answer: 'The HDN FIGRZ collection will drop on September 7, 2022, with pre-sale members getting priority mint positions.'
        },
        {
            question: 'WHAT IS A REFLECTION ?',
            answer: 'In simplest terms, crypto reflections can be seen as a reward system for holders of a token—in this case, a holder of an NFT. Crypto reflection is a new mechanism that rewards holders of a token/NFT simply for being a holder',
            // Link: "https://seven22project.io/reflections"
        },
        {
            question: 'WHAT IS CRYPTOCURRENCY',
            answer: 'Cryptocurrency is decentralized digital money that’s based on blockchain technology. You may be familiar with the most popular versions, Bitcoin and Ethereum, but there are more than 19,000 different cryptocurrencies in circulation. Learn more at Forbes - ',
            Link: 'https://forbes.com/advisor/investing/what-is-cryptocurrency/'
        },
        {
            question: 'WHAT IS THE BLOCKCHAIN?',
            answer: 'Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Learn more at Investopedia -  ',
            Link: "https://www.investopedia.com/terms/b/blockchain.asp"

        },
        {
            question: 'WHAT IS A NON-FUNGIBLE TOKEN(NFT)?',
            answer: 'A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be used to represent easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to establish a verified and public proof of ownership. Learn more at CNN - ',
            Link: "https://youtu.be/MjsQMAd7_SA"
        },
        {
            question: 'WHAT IS ETHEREUM?',
            answer: 'Ethereum is a platform powered by blockchain technology that is best known for its native cryptocurrency, called ether, or ETH, or simply ethereum. The distributed nature of blockchain technology is what makes the Ethereum platform secure, and that security enables ETH to accrue value. Learn more at Investopedia - ',
            Link: "https://www.investopedia.com/terms/e/ethereum.asp"
        },
        {
            question: 'HOW DO I GET A METAMASK ACCOUNT?',
            answer: "Go to https://MetaMask.io and click the “Download” button, which will take you to the relevant store to download the extension or app based on the device and browser you’re using. NOTE: The MetaMask extension is not compatible with Safari Browser. Supported browsers include: Google Chrome, Firefox, and Brave. - ",
            Link: "https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask"
        },
        {
            question: 'HOW DO I TRANSFER ETHER TO MY METAMASK ACCOUNT?',
            answer: "Learn how to transfer Ether, the native token of the Ethereum blockchain to your Metamask Crypto Wallet - ",
            Link: "https://docs.everbloom.co/article/255jk54yda-step-three-sending-your-eth-to-your-walletM"
        },
        {
            question: 'HOW DO I PURCHASE A SEVEN22 PROJECT NFT?',
            answer: "Watch the loom video below on how to mint your Seven22 NFT! COMING SOON!",
            // Link: ""
        },
        {
            question: 'HOW MANY MINTABLE NFTS ARE THERE?',
            answer: "SEVEN22 PROJECT (Seven22) is a digital collection of 7,022 unique NFTs (non-fungible tokens) that will be minted in multiple releases. "
        },
        {
            question: 'WHEN ARE REFLECTIONS SENT OUT?',
            answer: "Every HDN FIGRZ holder will receive reflections directly into their wallet quarterly"
        },
        // {
        //     question: 'HOW DO I TRACK MY REWARDS?',
        //     answer: "Discord bot will be the channel where you can check and verify all of your rewards and track your affiliates - ",
        //     Link: "https://_______________________________________________"
        // },
        {
            question: 'CAN I PURCHASE OR SELL A SEVEN22 NFT ON OPENSEA?',
            answer: "Once a person purchases the SEVEN22 PROJECT NFT, all future transactions happen on a secondary market, such as Opensea.io OpenSea is the first and largest peer-to-peer marketplace for cryptogoods (like an eBay for crypto assets), which include collectibles, gaming items, and other virtual goods backed by a blockchain. On OpenSea, anyone can buy or sell these items through a smart contract.",
            // Link: "https://_______________________ "
        },
    ]

    const [selected, SetSelected] = useState(null);

    const toggle = (i) => {

        if (selected === i) {
            return SetSelected(null);
        }
        SetSelected(i);
    }

    return (
        <div className="faq-container" id='faq'>
            <div className="faq-heading">
                <div className='heading-name'>FAQs</div>
                <div className="dotted-line"><img src="/assets/svg/faq-doted-line.svg" alt="" /></div>
            </div>
            <div className='line-below-faq-heading'></div>
            <div className="faq-body">


                {faqData.map((item, index) =>
                (
                    <div key={index}>
                        <div className={selected === index ? "Accordion-main-heading bg-fill" : "Accordion-main-heading bg-transparent"}  >
                            <h3 className="question-wrapper " onClick={() => toggle(index)} >{item.question}</h3>
                            <p style={{
                                cursor: 'pointer',
                            }} onClick={() => toggle(index)}>{selected === index ? <img src="/assets/svg/remove-icon.png" alt="remove-icon" /> : <img src="/assets/svg/add-icon.png" alt="add-icon" />}</p>
                        </div>
                        {
                            selected === index ? <p className="answers-wrapper" ><>
                                {item.answer}

                                {selected === index ? <a target="_blank" rel="noopener noreferrer" href={item.Link}>{item.Link}</a> : null}
                            </> </p> : null

                        }

                    </div>
                ))}

            </div>
            <CircleBox />
        </div>
    )
}

export default Faq;

function CircleBox() {
    return (
        <div className="circle-box">
            <img src="/assets/svg/TheIcons/semi-circle.svg" alt="" />
            <img src="/assets/svg/TheIcons/circle.svg" alt="" />

        </div>
    )
}

