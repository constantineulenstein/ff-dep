import React from "react";
import { Link } from "react-router-dom";
import "./NavigationSection.css";

function NavigationSection(props) {
  return (
    <div className="nav-bar">
      <div className="back-block">
        <a href="javascript:history.back()">
          <img id="arrowLeft" src="/assets/icons/arrow-left.svg" />
        </a>
        <div>Explore</div>
      </div>
      <div className="my-lists-block">
        <div>My Lists</div>
        <Link to="/personal-tags">
          <img id="arrowRight" src="/assets/icons/arrow-right.svg" />
        </Link>
      </div>
    </div>
  );
}

export default NavigationSection;
