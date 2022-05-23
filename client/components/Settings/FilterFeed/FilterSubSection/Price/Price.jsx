import React from "react";
import Heading from "../../../SubComponents/Heading/Heading";
import { SettingsTag } from "../../../SubComponents/Buttons/SettingsButtons";
import "./Price.css";

export default function Price() {
  return (
    <div className="settingsSectionBox">
      <Heading text="PRICE" />
      <div className={"prices"}>
        <SettingsTag text="$" />
        <SettingsTag text="$$" />
        <SettingsTag text="$$$" />
        <SettingsTag text="$$$$" />
      </div>
    </div>
  );
}
