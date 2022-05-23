import React from "react";
import "./SettingsClosingSection.css";

export default function SettingsClosingSection() {
  return (
    <div className="settingsClosingSection">
      <div>
        <a href="javascript:history.back()">
          <img id="closeCrossIcon" src="/ff-dep/assets/icons/cross.svg" />
        </a>
      </div>
    </div>
  );
}
