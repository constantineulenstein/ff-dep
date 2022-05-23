import React from "react";
import Heading from "../../../SubComponents/Heading/Heading";
import "./Ratings.css";

export default function Ratings() {
  return (
    <div className="settingsSectionBox">
      <Heading text="RATINGS" />
      <div className="ratings settings-text">
        <div>ratings from: </div>
        <div className="numberField">3</div>
        <div>to</div>
        <div className="numberField">5</div>
      </div>
    </div>
  );
}
