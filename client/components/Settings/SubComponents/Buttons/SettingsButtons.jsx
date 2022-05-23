import React, { useState } from "react";
import "./SettingsButtons.css";

function SettingsTag({ text, inactive }) {
  const [settingsTagSelected, setSettingsTagSelected] = useState(false);
  return (
    <div
      className={
        "settingsTag " +
        (settingsTagSelected & !inactive ? "fontColorGreen" : "") +
        (inactive ? "settingTagInactive" : "")
      }
      onClick={() => setSettingsTagSelected(!settingsTagSelected)}
    >
      {text}
    </div>
  );
}

function DistanceButton() {
  const [km, setkm] = useState(true);

  return (
    <div id="distanceButton">
      <div
        className={
          "distanceButtonIndividual distanceButtonLeft " +
          (km ? "greenBackground" : "")
        }
        onClick={() => setkm(true)}
      >
        km
      </div>
      <div
        className={
          "distanceButtonIndividual distanceButtonRight " +
          (km ? "" : "greenBackground")
        }
        onClick={() => setkm(false)}
      >
        mi
      </div>
    </div>
  );
}

export { SettingsTag, DistanceButton };
