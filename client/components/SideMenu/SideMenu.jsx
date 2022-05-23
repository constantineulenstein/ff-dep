import React, { useState } from "react";
import "./SideMenu.css";
import SideMenuSection from "./SideMenuSection/SideMenuSection";
import { useState } from "react";

export default function SideMenu() {
  const [SideMenuButtonClicked, setSideMenuButtonClicked] = useState(false);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSideMenuButtonClicked(false);
    }
  };

  let menu;
  if (SideMenuButtonClicked) {
    menu = (
      <div className="sideMenuScreen backdrop" onClick={handleClick}>
        <div className="sideMenu">
          <SideMenuSection text="Account" active={false} />
          <SideMenuSection text="Settings" active={false} />
          <div id="sideMenuAbout">
            <SideMenuSection text="About" active={true} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sideMenuComponent">
      <img
        className="menu-button"
        src="/assets/icons/menu.svg"
        onClick={() => setSideMenuButtonClicked(true)}
      />
      {menu}
    </div>
  );
}
