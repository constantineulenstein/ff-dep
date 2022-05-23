import React from "react";
import Heading from "../../../SubComponents/Heading/Heading";
import { SettingsTag } from "../../../SubComponents/Buttons/SettingsButtons";
import "./Miscellaneous.css";

export default function Miscellaneous() {
  return (
    <div className="settingsSectionBox">
      <Heading text="MISCELLANEOUS (beta)" />
      <div className="misc-tag-section">
        <SettingsTag text="Vegetarian" inactive={true} />
        <SettingsTag text="Vegan" inactive={true} />
        <SettingsTag text="Healthy" inactive={true} />
        <SettingsTag text="Gluten-Free" inactive={true} />
        <SettingsTag text="Soft-Drinks" inactive={true} />
        <SettingsTag text="Alcohol" inactive={true} />
      </div>
    </div>
  );
}
