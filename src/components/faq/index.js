import React, { useState } from 'react'


const Faq = () => {

    // faq dummy data 
    const faqData = [
        {
            question: 'WHAT IS THE SEVEN22 PROJECT?',
            answer: 'SEVEN22 PROJECT (SEVEN22) is a digital collection of 7,022 unique NFTs; an invite-only community and collective of elite members who share a community-first mindset and are focused on spreading peace throughout the ecosystem with community giveaways and charitable models.  '
        },
        {
            question: 'WHEN IS THE LAUNCH DATE ?',
            answer: 'The SEVEN22 PROJECTs will be launched on August 22, 2022, with pre-sale members getting priority mint positions'
        },
        {
            question: 'WHAT ARE THE SEVEN22 PROJECT REWARDS?',
            answer: 'When a Seven22 NFT is purchased, the commitment to the community is that 85% of the proceeds from the purchase will be contributed into a dedicated reflections pool for the Seven22 Community via a smart contract. Through the collective contribution that the community creates, a yield is realized, reflecting back to the NFT holders and members of the Seven22 community. The weekly yield is sent out directly to the community through reflections rewards via a smart contract.To learn more about the reflections rewards   -  ',
            Link: "https://seven22project.io/reflections"
        },
        {
            question: 'WHAT IS CRYPTOCURRENCY',
            answer: 'Cryptocurrency is decentralized digital money that’s based on blockchain technology. You may be familiar with the most popular versions, Bitcoin and Ethereum, but there are more than 19,000 different cryptocurrencies in circulation. Learn more at Forbes - ',
            Link: 'forbes.com/advisor/investing/what-is-cryptocurrency/'
        },
        {
            question: 'WHAT IS THE BLOCKCHAIN?',
            answer: 'Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Learn more at Investopedia -  ',
            Link: "https://www.investopedia.com/terms/b/blockchain.asp"

        },
        {
            question: 'WHAT IS A NON-FUNGIBLE TOKEN(NFT)?',
            answer: 'A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be used to represent easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to establish a verified and public proof of ownership. Learn more at CNN - ',
            Link: "https://www.cnn.com/2021/03/17/business/what-is-nft-meaning-fe-series"
        },
        {
            question: 'WHAT IS ETHEREUM?',
            answer: 'Ethereum is a platform powered by blockchain technology that is best known for its native cryptocurrency, called ether, or ETH, or simply ethereum. The distributed nature of blockchain technology is what makes the Ethereum platform secure, and that security enables ETH to accrue value. Learn more at Investopedia - ',
            Link: "https://www.investopedia.com/terms/e/ethereum.asp"
        },
        {
            question: 'HOW DO I GET A METAMASK ACCOUNT?',
            answer: "MetaMask is a web browser extension that allows you to manage your Ethereum private keys via your web browser. By doing so, it serves as a wallet for Ether and ERC-20 tokens, and allows you to visit the distributed web of tomorrow in your browser today. To be more specific, it allows you to run Ethereum Dapps (Decentralized Apps) right in your browser without running a full Ethereum node. (In other words, you don't have to download and sync the full blockchain on your device or computer). Our mission is to make Ethereum as easy to use for as many people as possible. What is MetaMask - https://youtu.be/YVgfHZMFFFQ How to install MetaMask on all devices and browsers - ",
            Link: "https://metamask.zendesk.com/hc/en-us/articles/36001548953-Getting-started-with-Meta"
        },
        {
            question: 'HOW DO I TRANSFER ETHER TO MY METAMASK ACCOUNT?',
            answer: "Learn how to transfer Ether, the native token of the Ethereum blockchain to your Metamask Crypto Wallet - ",
            Link: "https://docs.everbloom.co/article/255jk54yda-step-three-sending-your-eth-to-your-walletM"
        },
        {
            question: 'HOW DO I PURCHASE A SEVEN22 PROJECT NFT?',
            answer: "Watch the loom video below on how to mint your Seven22 NFT! Welcome to the SEVEN22 PROJECTs community! - ",
            Link: "https://_____________________________________________"
        },
        {
            question: 'HOW MANY MINTABLE NFTS ARE THERE?',
            answer: "SEVEN22 PROJECT (Seven22) is a digital collection of 7,022 unique NFTs (non-fungible tokens) that will be minted in multiple releases. "
        },
        {
            question: 'HOW AND WHEN WILL MY REWARDS BE SENT OUT?',
            answer: "All available reflections rewards will be sent out weekly. There is a requirement to have a minimum of $500 in reflections to trigger a transfer to your MetaMask wallet. Available Direct reflections Rewards are sent out every week starting on week 7."
        },
        {
            question: 'HOW DO I TRACK MY REWARDS?',
            answer: "Discord bot will be the channel where you can check and verify all of your rewards and track your affiliates - ",
            Link: "https://_______________________________________________"
        },
        {
            question: 'CAN I PURCHASE OR SELL A SEVEN22 NFT ON OPENSEA?',
            answer: "Once a person purchases the SEVEN22 PROJECT NFT, all future transactions happen on a secondary market, such as Opensea.io OpenSea is the first and largest peer-to-peer marketplace for cryptogoods (like an eBay for crypto assets), which include collectibles, gaming items, and other virtual goods backed by a blockchain. On OpenSea, anyone can buy or sell these items through a smart contract. Seven22 NFT Holder Verification Process on Discord When you purchase a SEVEN22 PROJECT NFT you will have access to a Special “Holders Space” on Discord. This space will have updates and information only for Seven22 NFT holders - i.e. special pricing, updates, and information - ",
            Link: "https://_______________________ "
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
                    <div>
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

