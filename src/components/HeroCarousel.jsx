import React from "react";

import ActiveBatchesFund from "../assets/Icons/ActiveBatchesFund.svg";
import SoldTickets from "../assets/Icons/SoldTickets.svg";
import TotalPrizeFund from "../assets/Icons/TotalPrizeFund.svg";

import "./HeroCarousel.css";

const HeroCarousel = () => {
  return (
    <div className="carousel--container">
      <div className="carousel--card">
        <img src={ActiveBatchesFund} alt="" />
        <h4>Active Batches' Prize Fund</h4>
        <hr />
        <div>
          <span>$389.768</span>
          <span>191.02 ETH</span>
        </div>
      </div>
      <div className="carousel--card">
        <img src={SoldTickets} alt="" />
        <h4>Active Batches' Sold Tickets</h4>
        <hr />
        <div>
          <span>167,025 Tickets</span>
        </div>
      </div>
      <div className="carousel--card">
        <img src={TotalPrizeFund} alt="" />
        <h4>Total Prize Fund</h4>
        <h4 style={{ height: "16px" }}></h4>
        <hr />
        <div>
          <span>$1,847,099</span>
          <span>796.18 ETH</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
