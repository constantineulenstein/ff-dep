import React, { useState } from "react";
import LineHeading from "../../Favorites/TagSelection/SubComponents/LineHeading/LineHeading";
import SettingsClosingSection from "../SubComponents/ClosingSection/SettingsClosingSection";
import Location from "./FilterSubSection/Location/Location";
import OperationHours from "./FilterSubSection/OperationHours/OperationHours";
import Ratings from "./FilterSubSection/Ratings/Ratings";
import Price from "./FilterSubSection/Price/Price";
import Miscellaneous from "./FilterSubSection/Miscellaneous/Miscellaneous";
import "../Settings.css";
import Ratings from "./FilterSubSection/Ratings/Ratings";

function FilterFeed() {
  return (
    <div className="settingsScreen">
      <SettingsClosingSection />
      <Location />
      <OperationHours />
      <Ratings />
      <Price />
      <Miscellaneous />
    </div>
  );
}

export default FilterFeed;
