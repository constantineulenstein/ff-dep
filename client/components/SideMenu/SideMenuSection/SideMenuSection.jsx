import React from "react";
import "./SideMenuSection.css";

export default function SideMenuSection({ text, active }) {
  return (
    <div className="sideMenuSection">
      <span className={active ? "" : "sideMenuSectionInactive"}>{text}</span>
    </div>
  );
}
