import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation({ explore_flag }) {
  return (
    <div className="Bottom-Navigation">
      <Link to="/food-feed">
        <img
          className={"ButtonSymbol " + (explore_flag ? "SVGGreen" : "SVGGrey")}
          src="/assets/icons/magnifier.svg"
        />
      </Link>
      <Link to="/personal-tags">
        <img
          className={"ButtonSymbol " + (explore_flag ? "SVGGrey" : "SVGGreen")}
          src="/assets/icons/star.svg"
        />
      </Link>
    </div>
  );
}

export default MainNavigation;
