import { connect, getAccount } from "simple-web3";
import React, { useState, useEffect } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS, GAS_LIMIT } from "../../config.js";
import { ethers } from "ethers";
import ethConverter from "ethereum-unit-converter";
import Web3 from "web3";

const Web3EthContract = require("web3-eth-contract");

const Mint = () => {
  let [mintQuantity, setMintQuantity] = useState(1);
  let [walletConnected, setWalletConnected] = useState(false);
  // let [ownsAlien, setOwnsAlien] = useState(false)mintQuantity
  // let [showQuestion, setShowQuestion] = useState(true)
  let [walletAddress, setWalletAddress] = useState("");
  // let [presaleMaxNftPerWallet, setpresaleMaxNftPerWallet] = useState(2)

  let [presaleMaxNftPerWallet, setPresaleMaxNftPerWallet] = useState();
  let [mainSaleMaxNftPerWallet, setMainSaleMaxNftPerWallet] = useState();
  let [preMintPrice, setPreMintPrice] = useState();
  let [supply, setSupply] = useState();
  let [paused, setPaused] = useState();
  let [price, setPrice] = useState();

  // const contractMethods = new Web3EthContract(CONTRACT_ABI, CONTRACT_ADDRESS).methods;

  useEffect(() => {
    onPageLoad();
  }, []);

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  const convertToETH = (num) => {
    return ethers.utils.formatEther(num);
  };

  const weiToNumber = (num) => {
    return num.toNumber();
  };

  const onPageLoad = async () => {
    try {
      setPrice(convertToETH(await contract.mintPrice()));
      setPreMintPrice(convertToETH(await contract.preMintPrice()));
      setPresaleMaxNftPerWallet(
        weiToNumber(await contract.presaleMaxNFTPerWallet())
      );
      setMainSaleMaxNftPerWallet(
        weiToNumber(await contract.publicSaleMaxNFTPerWallet())
      );
      setSupply(weiToNumber(await contract.supply()));
      setPaused(await contract.paused());

      // console.log('presaleMaxNftPerWallet', presaleMaxNftPerWallet)
      // console.log('mainSaleMaxNftPerWallet', mainSaleMaxNftPerWallet)
      // console.log('preMintPrice', preMintPrice)
      // console.log('supply', supply)
      // console.log('paused', paused)
      // console.log('price', price)

      // console.log(convertToETH(await contract.mintPrice()))
    } catch (e) {
      console.log(e);
    }
  };

  const mint = async () => {
    if (paused) return;

    try {
      let newPrice = Number(mintQuantity) * Number(preMintPrice);
      let newPriceEth = ethers.utils.parseEther(newPrice.toString());

      console.log(newPrice);
      console.log(newPriceEth);

      const result = await contract.mint(mintQuantity, {
        value: newPriceEth,
        gasLimit: GAS_LIMIT,
      });

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  const increaseMintNum = () => {
    if (mintQuantity <= presaleMaxNftPerWallet - 1)
      setMintQuantity((mintQuantity += 1));
  };

  const decreaseMintNum = () => {
    if (mintQuantity > 1) setMintQuantity((mintQuantity -= 1));
  };

  const exitMint = () => {
    const shouldExit = window.confirm("Exit mint?");
    if (!shouldExit) return;
  };

  const connectWallet = async () => {
    const address = await getAccount();

    if (!address) setWalletConnected(false);
    else {
      setWalletAddress(address);
      setWalletConnected(true);
      onPageLoad();
    }

    console.log(address);
  };

  return (
    <main className="mint-page-main">
      <div className=" section flex-column-center mint-bg">
        <h2>Mint your buni's</h2>

        <div className="flex mint-controls-container">
          <div className="mint-num-btns" onClick={decreaseMintNum}>
            -
          </div>
          <h2 className="mint-num">{mintQuantity}</h2>
          <div className="mint-num-btns" onClick={increaseMintNum}>
            +
          </div>
        </div>

        {walletAddress ? (
          <div>
            <small>
              Connected Wallet: <br /> {walletAddress}
            </small>
            <br />
            <br />
          </div>
        ) : (
          <></>
        )}

        {!walletConnected ? (
          <div className="btn" onClick={connectWallet}>
            Connect wallet
          </div>
        ) : (
          <div className="flex">
            <div
              className="btn connect-wallet-btn exit-min-btn"
              onClick={exitMint}
            >
              Exit mint
            </div>
            <div className="btn mint-btn" onClick={mint}>
              Mint now
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Mint;
