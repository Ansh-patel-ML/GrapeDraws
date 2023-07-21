import React, { useState, useContext } from "react";

import EtheriumIcon from "../assets/Icons/Ethereum.svg";
import CoinOne from "../assets/Icons/FirstPlace.svg";
import CoinTwo from "../assets/Icons/SecondPlace.svg";
import CoinThree from "../assets/Icons/ThirdPlace.svg";
import LeftArrowBtn from "../assets/Icons/LeftArrowBtn.svg";
import RightArrowBtn from "../assets/Icons/RightArrowBtn.svg";
import InfoIcon from "../assets/Icons/16.svg";
import { WalletContext } from "../App";
import ConnectMetaMask from "./modals/ConnectMetaMask";
import { _Bid } from "../ContractFunctions";
import MessagePopUp from "./modals/MessagePopUp";
import "./Batch.css";

const Batch = () => {
  const [tickets, SetTickets] = useState(2);
  const [openModal, setOpenModal] = useState(false);
  const [isConnectedPopUp, setIsConnectedPopUp] = useState(false);
  const { metaMaskAccountInfo, setMetaMaskAccountInfo } =
    useContext(WalletContext);

  const HandleRemoveTicket = () => {
    if (tickets > 1) {
      SetTickets((tickets) => tickets - 1);
    }
  };

  const closeConnectModal = (isConnected, address) => {
    setOpenModal(false);
    if (address && isConnected) {
      setIsConnectedPopUp(true);
      setTimeout(() => {
        setIsConnectedPopUp(false);
      }, 7000);
    }
  };

  const closePopUp = () => setIsConnectedPopUp(false);

  const HandleAddTicket = () => {
    SetTickets((tickets) => tickets + 1);
  };

  const HandleBuyTickets = () => {
    if (metaMaskAccountInfo.address && metaMaskAccountInfo.isConnected) {
      _Bid(
        0.001,
        tickets,
        metaMaskAccountInfo.address,
        metaMaskAccountInfo.web3,
        metaMaskAccountInfo.contractInstance
      );
    } else {
      setOpenModal(true);
    }
  };

  return (
    <div className="Batch">
      {openModal && <ConnectMetaMask closeModal={closeConnectModal} />}
      {isConnectedPopUp && (
        <MessagePopUp
          message="You've have successfully connected to Metamask Wallect"
          closePopUp={closePopUp}
        />
      )}
      <div className="Batch--Heading">
        <h1>Batch #134</h1>
        <div>
          <img src={EtheriumIcon} alt="" />
          <h4>Ethereum</h4>
        </div>
      </div>
      <div className="Batch--Time--Stats">
        <div>
          <h4 className="gray grow">Period:</h4>
          <h4>Daily</h4>
        </div>
        <div>
          <h4 className="gray grow">Ends in:</h4>
          <h4>00:03:58</h4>
        </div>
      </div>
      <div className="Batch--Price--Stats">
        <div className="Batch--Price--Stats--Info">
          <h4 className="gray">Grand prizes</h4>
          <img src={InfoIcon} alt="" />
        </div>
        <div className="Batch--Price--Container">
          <div>
            <img src={CoinOne} alt="" />
            <div>
              <h4 className="big">2.44 ETH</h4>
              <h4 className="gray invisible">$4687.29</h4>
            </div>
          </div>
          <div>
            <img src={CoinTwo} alt="" />
            <div>
              <h4 className="big">0.92 ETH</h4>
              <h4 className="gray invisible">$1767.58</h4>
            </div>
          </div>
          <div>
            <img src={CoinThree} alt="" />
            <div>
              <h4 className="big">1.33 ETH</h4>
              <h4 className="gray invisible">$2555.30</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="Batch--Tickets--Price">
        <h4 className="gray">Ticket Price:</h4>
        <div>
          <h4>0.0001 ETH</h4>
          <h4 className="gray">$0.19</h4>
        </div>
      </div>
      <div className="Batch--Tickets--Sold">
        <h4 className="gray">Sold tickets:</h4>
        <div>
          <h4>18,258</h4>
          <h4>Transactions</h4>
        </div>
      </div>
      <div className="Batch--Buy--Container">
        <div className="Batch--Add--Button">
          <img src={LeftArrowBtn} alt="" onClick={HandleRemoveTicket} />
          <h4>{tickets}</h4>
          <img src={RightArrowBtn} alt="" onClick={HandleAddTicket} />
        </div>
        <div className="Batch--Buy--Button" onClick={HandleBuyTickets}>
          <h4>Buy 0.002 ETH {tickets} Tickets</h4>
        </div>
      </div>
    </div>
  );
};

export default Batch;
