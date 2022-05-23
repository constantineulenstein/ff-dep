import React from "react";
import Heading from "../../../SubComponents/Heading/Heading";
import "./OperationHours.css";

export default function OperationHours() {
  return (
    <div className="settingsSectionBox">
      <Heading text="OPERATIONAL HOURS" />
      <div className="hours settings-text">
        <div>open from: </div>
        <div className="time">
          <div className="numberField">19</div>
          <div> : </div>
          <div className="numberField">00</div>
        </div>
        <div>to</div>
        <div className="time">
          <div className="numberField">21</div>
          <div>:</div>
          <div className="numberField">00</div>
        </div>
      </div>
    </div>
  );
}
