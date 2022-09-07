import React from 'react'
import { useEffect, useState } from 'react'

import { useCountdown } from '../../hooks/useCountdown';
import useETHPrice from '../../hooks/useETHPrice';

import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
import Web3Modal from "web3modal";

import InputNumber from './Components/InputNumber';
// import MintSlider from './Components/mint-Carosule';

import EthereumSession from '../../lib/eth-session';
import contractABI from '../../lib/contract-abi';

import Merkle from '../../lib/merkle';



const NFT_PRICE = 1200.0;
const TARGET_DATE_MS = 1662508800000;
// const TARGET_DATE_MS = 1661777535181;

//mainnet

const network = {
    chain:      EthereumSession.COMMON_CHAINS[1],
    infuraId: '9f57294117e34952877d794e30a0fdbe', //llama
    name:      'mainnet'
};



//rinkeby

// const network = {
//     chain: EthereumSession.COMMON_CHAINS[4],
//     infuraId: '9f57294117e34952877d794e30a0fdbe', //llama
//     name: 'rinkeby'
// };

network.url = `https://${network.name}.infura.io/v3/${network.infuraId}`;


const MintPage = () => {
    const [ethAccount, setEthAccount] = React.useState();
    const [ethProvider, setEthProvider] = React.useState(window.ethereum);
    const [mintQuantity, setMintQuantity] = React.useState(1);

    const session = React.useMemo(() => {
        const tmp = new EthereumSession({
            chain: network.chain,
            contractAddress: '0xBed947eB04Fc045bF4c30e8dA29e7c5efA2d40d3',
            contractABI: contractABI
        });

        tmp.wallet.on('accountsChanged', async (walletSession) => {
            if (walletSession?.wallet?.accounts?.length) {
                const account = walletSession.wallet.accounts[0];
                setEthAccount(account);
            }
            else {
                setEthAccount(null);
            }
        });

        return tmp;

        // eslint-disable-next-line
    }, [ethProvider]);

    const modal = React.useMemo(() => {
        const tmp = new Web3Modal({
            network: network.name,
            cacheProvider: false,
            disableInjectedProvider: false,
            providerOptions: {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: network.infuraId,
                    },
                },
                "custom-walletlink": {
                    package: WalletLink,
                    display: {
                        name: "Coinbase",
                        description: "Connect to Coinbase Wallet",
                        logo: "/assets/images/coinbase.jpg",
                    },
                    options: {
                        appName: "Coinbase",
                        chainId: network.chain.decimal,
                        networkUrl: network.url
                    },
                    connector: async () => {
                        const walletLink = new WalletLink({ appName: 'Coinbase' });
                        const provider = walletLink.makeWeb3Provider(network.url, network.chain.decimal);
                        await provider.enable();
                        return provider;
                    }
                }
            }
        });
        return tmp;

        // eslint-disable-next-line
    }, []);

    const connect = async (deep) => {
        let provider = window?.ethereum;


        try {
            if (deep) {
                provider = await modal.connect();
            }
        }
        catch (err) {
            console.debug({ err });
            return false;
        }

        try {
            if (await session.connectWeb3(deep, provider)) {
                const accounts = await session.getWalletAccounts();
                if (accounts && accounts.length) {
                    setEthAccount(accounts[0]);
                    return true;
                }
            }

            //else
            setEthAccount(null);
            setEthProvider(provider);
            return false;
        }
        catch (err) {
            console.warn({ err });
            return false;
        }
    };

    const handleConnect = async () => {
        connect(true);
    };

    const handleInit = async () => {
        connect();
    };

    const handleMint = async () => {
        try{
            // if( !(await connect( true )) )
            //     return;


            const saleIsActive = await session.contract.methods.isPublicSaleActive().call();
            if( !saleIsActive ){
                alert( "Sale is not active" );
                return;
            }


            // const MAX_APES = await session.contract.methods.MAX_APES().call();           
            // const maxApePurchase = await session.contract.methods.maxApePurchase().call();

            const sevenPrice = await session.contract.methods.publicPrice().call();
            const price = window.BigInt( sevenPrice.toString() );
            const quantity = window.BigInt( mintQuantity );
            const totalEth = price * quantity;

            await session.contract.methods.mint( mintQuantity ).estimateGas({
                from: ethAccount,
                value: totalEth.toString()
            });

            await session.contract.methods.mint( mintQuantity ).send({
                from: ethAccount,
                value: totalEth.toString()
            });

            alert( "Mint Successful" );
        }
        catch( err ){
            const ethError = EthereumSession.getError( err );
            if( ethError.code === 4001 ){
                alert( "Please try again and confirm the transaction" );
            }
            else if( ethError.message ){
                let message = ethError.message;
                if( message.includes( "greedy" ) )
                    message = "Only 1 per wallet";
                else if( message.includes( "Returned values a=/ren't valid" ) )
                    message = `Please switch your wallet to the '${network.name}' network`;

                alert( message );
            }
            else{
                alert( ethError );
            }
        }
    };

    const handlePresale = async () => {
        // let provider = window?.ethereum;
        //   await contract.estimateGas.presale( proof, account.alloc, amount );
        //   await contract.presale( proof, account.alloc, amount );
    
            try{
                // if( !(await connect( true )) )
                // return;

                // if( !(await session.connectWeb3( true, ethProvider )) ){
                //     if(!(await connect( true, ethProvider ))){
                //         return;
                //     }
                // }
    
                const merkle = new Merkle();
                merkle.load();
                // const root = merkle.tree.getHexRoot();
                // console.info(root);
                
                
                const account = merkle.getAccount( ethAccount );
                if( !account ){
                    alert( "No claims" );
                    return;
                }
            
                const amount = mintQuantity;
                const proof = merkle.tree.getHexProof( account.leaf );
                const saleIsActive = await session.contract.methods.isPresaleActive().call();
                if(!saleIsActive){
                    alert( "Sale is not active" );
                    return;
                }
    
                const totalEth = 0;
                await session.contract.methods.presale( proof, account.alloc, amount ).estimateGas({
                    from: ethAccount,
                    value: totalEth.toString()
                });
     
                
                await session.contract.methods.presale(proof, account.alloc, amount).send({
                    from: ethAccount,
                    value: totalEth.toString()
                });
    
                alert( "Mint Successful" );
            }
            catch( err ){
                const ethError = EthereumSession.getError( err );
                if( ethError.code === 4001 ){
                    alert( "Please try again and confirm the transaction" );
                }
                else if( ethError.message ){
                    let message = ethError.message;
                    if( message.includes( "greedy" ) )
                        message = "Only 1 per wallet";
                    else if( message.includes( "Returned values aren't valid" ) )
                        message = `Please switch your wallet to the '${network.name}' network`;
    
                    alert( message );
                }
                else{
                    alert( ethError );
                }
            }
        }

    useEffect(() => {
        handleInit();

        // eslint-disable-next-line
    }, []);
    
    var price_tracker_intervalID = 0;
    const [ethRate, setEthprice] = useState(null)
    const [preSalePrice, setPreSalePrice] = useState(null)
    const [days, hours, minutes, seconds] = useCountdown(TARGET_DATE_MS);
    const presale_started = days + hours + minutes + seconds <= 0 ? true : false;
    const {
        fetchEthPrice
    } = useETHPrice()

    useEffect(() => {
        startFethingEthPrice();
         // eslint-disable-next-line 
        price_tracker_intervalID = setInterval(startFethingEthPrice, 30000);

        return () => {
            clearInterval(price_tracker_intervalID)
        }
    }, [])

    const startFethingEthPrice = async () => {
        let price = await fetchEthPrice();
        let preSalePriceCalc = NFT_PRICE / price;
        preSalePriceCalc = preSalePriceCalc?.toFixed(4)
        setEthprice(price)
        setPreSalePrice(preSalePriceCalc)
    }

    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
         // eslint-disable-next-line 
    }, [1])
    const render = () => {
        let handler = handleConnect;
        let preSaleHandler = handleConnect;
        let buttonText = "Connect wallet";
        let preSaleButton = "Presale Connect";
        if( ethAccount ){
            handler = handleMint;
            preSaleHandler = handlePresale;
            buttonText = "Mint";
            preSaleButton = "Claim Presale";
            //"Connected: "+ ethAccount.substr( 0, 6 ) +'...'+ ethAccount.substr( 38 );
        }
        
        return (
            <>
                {/* <NavBar /> */}
                <div className="mint-page-container">
                    <div className="mintPage-inner-wrapper">
                        <div className="mintPage-heading"><span>Join</span>  the culture</div>
                        <div className="mintPage-subheading">Over <span>7000 </span>icons waiting for you</div>
                        {ethAccount}
                        <div className="sales-text">
                            <div className="leftSide-text">
                                <div className="text-wrapper">
                                    <img src="/assets/svg/Mint-page/mint-icon-factorial.svg" alt="" />
                                    {preSalePrice && <h5>Mint @ <span>{preSalePrice}ETH</span>/icons</h5>}
                                </div>
                            </div>
                            <div className="rightSide-text">
                                <img src="/assets/svg/Mint-page/clock-icon.svg" alt="clock" />
                                {!presale_started && <h5>{24 * days + hours}hrs : {minutes}mins : {seconds}secs</h5>}
                                {presale_started && <h5>SALE IS LIVE!</h5>}
                            </div>
                            <div className="rightSide-text">
                                <img src="/assets/svg/Mint-page/Etherium-icon.svg" alt="Etherium" />
                                {ethRate && <h5>ETH @ {ethRate}/USD</h5>}
                                {!ethRate && <h5>Fetching...</h5>}
                            </div>
                        </div>

                        <div className="mint-buttons">
                            <div className="number-incrementor">
                                <InputNumber mintQuantity={mintQuantity} setMintQuantity={setMintQuantity} />
                                {/* <div className="input-btn-line-1"></div>
                                <div className="input-btn-line-2"></div> */}
                            </div>

                            <div className="mint-now-btn" onClick={handler}>
                                {/* <div className="mint-btn-line-top-right-1"></div>
                                <div className="mint-btn-line-top-right-2"></div> */}
                                <span>{buttonText}</span>
                                {/* <div className="mint-btn-line-1"></div>
                                <div className="mint-btn-line-2"></div> */}
                            </div>
                            <div className="mint-now-btn" onClick={preSaleHandler}>
                                {/* <div className="mint-btn-line-top-right-1"></div>
                                <div className="mint-btn-line-top-right-2"></div> */}
                                <span>{preSaleButton}</span>
                                {/* <div className="mint-btn-line-1"></div>
                                <div className="mint-btn-line-2"></div> */}
                            </div>
                        </div>
                        {/* <MintSlider /> */}
                        {/* </div> */}
                    </div>
                </div>
            </>
        );

    };

    return render();
}

export default MintPage;