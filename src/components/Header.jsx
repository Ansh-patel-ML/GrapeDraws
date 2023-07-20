import React, { useEffect, useRef, useState } from "react";
import useResizeObserver from "../Utils/customHooks/ResizeObserver";
import GrapeDrawIcon from "../assets/Icons/GrapeDraw.svg";
import Web3 from "web3";
import "./Header.css";
import GrapeDraw from "../contracts/GrapeDraw.json";
import { MetaMaskAvatar } from "react-metamask-avatar";

const Header = () => {
  const headerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [web3, setWeb3] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const handleResize = (entries) => {
    for (let entry of entries) {
      const { width } = entry.contentRect;
      setWidth(width);
    }
  };

  useResizeObserver(headerRef, handleResize);

  useEffect(() => {
    async function loadUserData() {
      if (contractInstance && !userAddress) {
        const accounts = await web3.eth.getAccounts();
        setUserAddress(accounts[0]);
      }
    }
    loadUserData();
  }, [contractInstance, userAddress]);

  const handleConnect = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const contractAddress = "0x9d195f5266396A05De0c1756C0e54a317864086B";
        const contract = new web3Instance.eth.Contract(
          GrapeDraw.abi,
          contractAddress
        );
        setContractInstance(contract);
      } else {
        console.error("MetaMask not detected. Please install MetaMask.");
      }
    } catch (error) {
      console.error("Error connecting:");
    }
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="header--container">
        <div className="header--grapeDraw">
          <img src={GrapeDrawIcon} alt="GrapeDraw" />
          <h1 className={width >= 414 ? "show" : "hide"}>GRAPEDRAW</h1>
        </div>
        {userAddress && (
          <div className="header--user--info">
            <MetaMaskAvatar address={userAddress} size={32} />
            <h4>
              {userAddress.slice(0, 6)}...{userAddress.slice(-4)}
            </h4>
          </div>
        )}
        {!userAddress && (
          <button className="header--connect" onClick={handleConnect}>
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
