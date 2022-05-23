import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation({ explore_flag }) {
  return (
    <div className="Bottom-Navigation">
      <Link to="/food-feed">
        <img
          className={"ButtonSymbol " + (explore_flag ? "SVGGreen" : "SVGGrey")}
          src="/ff-dep/assets/icons/magnifier.svg"
        />
      </Link>
      <Link to="/personal-tags">
        <img
          className={"ButtonSymbol " + (explore_flag ? "SVGGrey" : "SVGGreen")}
          src="/ff-dep/assets/icons/star.svg"
        />
      </Link>
    </div>
  );
}

export default MainNavigation;
