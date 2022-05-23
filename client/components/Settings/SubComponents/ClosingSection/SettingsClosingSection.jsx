import React from "react";
import "./SettingsClosingSection.css";

export default function SettingsClosingSection() {
  return (
    <div className="settingsClosingSection">
      <div>
        <a href="javascript:history.back()">
          <img id="closeCrossIcon" src="/assets/icons/cross.svg" />
        </a>
      </div>
    </div>
  );
}
