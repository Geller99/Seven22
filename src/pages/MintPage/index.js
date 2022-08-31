import React from 'react'

import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
import Web3Modal from "web3modal";

import InputNumber from './Components/InputNumber';
import MintSlider from './Components/mint-Carosule';

import EthereumSession from '../../lib/eth-session';
import contractABI from '../../lib/contract-abi';

//mainnet
/*
const network = {
    chain:      EthereumSession.COMMON_CHAINS[1],
    infuraId: '9f57294117e34952877d794e30a0fdbe', //llama
    name:                              'mainnet'
};
*/



//rinkeby
const network = {
    chain:      EthereumSession.COMMON_CHAINS[4],
    infuraId: '9f57294117e34952877d794e30a0fdbe', //llama
    name:                              'rinkeby'
};

network.url = `https://${network.name}.infura.io/v3/${network.infuraId}`;

const MintPage = () => {
    const [ ethAccount, setEthAccount ] = React.useState();
    const [ ethProvider, setEthProvider ] = React.useState( window.ethereum );
    const [ mintQuantity, setMintQuantity ] = React.useState( 1 );

    const session = React.useMemo(() => {
        const tmp = new EthereumSession({
            chain:                                          network.chain,
            contractAddress: '0x740CD913a2B9f1C888C6B07C1FCfeB8D0CB38ec1',
            contractABI:                                      contractABI
        });

        tmp.wallet.on( 'accountsChanged', async ( walletSession ) => {
            if( walletSession?.wallet?.accounts?.length ){
              const account = walletSession.wallet.accounts[0];
              setEthAccount( account );
            }
            else{
              setEthAccount( null );
            }
        });

        return tmp;

        // eslint-disable-next-line
    }, [ ethProvider ]);

    const modal = React.useMemo(() => {
        const tmp = new Web3Modal({
            network:          network.name,
            cacheProvider:           false,
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
                        appName:    "Coinbase",
                        chainId:    network.chain.decimal,
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

    const connect = async ( deep ) => {
        let provider = window?.ethereum;
  
  
        try{
            if( deep ){
                provider = await modal.connect();
            }
        }
        catch( err ){
            console.debug({ err });
            return false;
        }
    
        try{
            if( await session.connectWeb3( deep, provider ) ){
                const accounts = await session.getWalletAccounts();
                if( accounts && accounts.length ){
                    setEthAccount( accounts[0] );
                    return true;
                }
            }
    
            //else
            setEthAccount( null );
            setEthProvider( provider );
            return false;
        }
        catch( err ){
            console.warn({ err });
            return false;
        }
    };

    const handleConnect = async () => {
        connect( true );
    };

    const handleInit = async () => {
        connect();
    };

    const handlePresale = async () => {
        try{
            if( !(await connect( true )) )
                return;

            const saleIsActive = await session.contract.methods.paused().call();
            if(saleIsActive){
                alert( "Sale is not active" );
                return;
            }

            const totalEth = 0;
            await session.contract.methods.presale( mintQuantity ).estimateGas({
                from: ethAccount,
                value: totalEth.toString()
            });

            await session.contract.methods.presale( mintQuantity ).send({
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

    const handleMint = async () => {
        try{
            if( !(await connect( true )) )
                return;


            const saleIsActive = await session.contract.methods.paused().call();
            if( saleIsActive ){
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
                else if( message.includes( "Returned values aren't valid" ) )
                    message = `Please switch your wallet to the '${network.name}' network`;

                alert( message );
            }
            else{
                alert( ethError );
            }
        }
    };

    React.useEffect(() => {
        handleInit();

        // eslint-disable-next-line
    }, []);

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
                        <div className="mintPage-subheading">Over <span>7022 </span>icons waiting for you</div>
              
                            {ethAccount}
        
                        <div className="sales-text">
                            <div className="leftSide-text">
                                <div className="text-wrapper">
                                    <img src="/assets/svg/Mint-page/mint-icon-factorial.svg" alt="" />
                                    <h5>Presale @ <span>0.4279ETH</span> is over </h5>
                                </div>
                            </div>
                            {/* <div className="rightSide-text">
                                <img src="/assets/svg/Mint-page/clock-icon.svg" alt="clock" />
                                <h5>10days left</h5>
                            </div> */}
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
                        <MintSlider />
                    </div>
                </div>
            </>
        );
    };

    return render();
}

export default MintPage;