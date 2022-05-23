import React from "react";
import "./Heading.css";

export default function Heading({ text }) {
  return (
    <div className="settingsHeadingContainer">
      <div className="settingsHeadingSubContainer">
        <span className="settingsHeadingText">{text}</span>
      </div>
    </div>
  );
}
