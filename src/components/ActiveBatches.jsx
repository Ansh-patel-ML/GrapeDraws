import React from "react";
import Batch from "./Batch";

import "./ActiveBatches.css";

const ActiveBatches = () => {
  return (
    <div className="Active--Batches">
      <h1>Active Batches</h1>
      <Batch />
      <Batch />
    </div>
  );
};

export default ActiveBatches;
