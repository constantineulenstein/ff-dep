import React from "react";
import Heading from "../../../SubComponents/Heading/Heading";
import { DistanceButton } from "../../../SubComponents/Buttons/SettingsButtons";
import "./Location.css";

export default function Location() {
  return (
    <div className="settingsSectionBox">
      <Heading text="LOCATION" />
      <div className="searchBarFilter">
        <div className="searchBarText">Palo Alto</div>
      </div>
      <div className="radius settings-text">
        <div>radius: </div>
        <div className="numberField">5</div>
        <DistanceButton />
      </div>
    </div>
  );
}
