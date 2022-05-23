import React from "react";
import FavoritesTagSelection from "../../TagSelection/FavoritesTagSelection/FavoritesTagSelection";
import "./TagsFeedNavigation.css";

export default function TagsFeedNavigation() {
  return (
    <div className="tagsFeedNavigationSection">
      <div id="tagsFeedNavigationHeading">
        <span>Tagged</span>
      </div>
      <FavoritesTagSelection />
    </div>
  );
}
