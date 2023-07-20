import React, { useState } from "react";

import EtheriumIcon from "../assets/Icons/Ethereum.svg";
import CoinOne from "../assets/Icons/FirstPlace.svg";
import CoinTwo from "../assets/Icons/SecondPlace.svg";
import CoinThree from "../assets/Icons/ThirdPlace.svg";
import LeftArrowBtn from "../assets/Icons/LeftArrowBtn.svg";
import RightArrowBtn from "../assets/Icons/RightArrowBtn.svg";
import InfoIcon from "../assets/Icons/16.svg";
import "./Batch.css";

const Batch = () => {
  const [tickets, SetTickets] = useState(2);

  const HandleRemoveTicket = () => {
    if (tickets > 1) {
      SetTickets((tickets) => tickets - 1);
    }
  };

  const HandleAddTicket = () => {
    SetTickets((tickets) => tickets + 1);
  };

  return (
    <div className="Batch">
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
        <div className="Batch--Buy--Button">
          <h4>Buy 0.002 ETH {tickets} Tickets</h4>
        </div>
      </div>
    </div>
  );
};

export default Batch;
