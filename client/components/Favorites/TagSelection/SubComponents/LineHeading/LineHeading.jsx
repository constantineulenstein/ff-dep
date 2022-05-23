import React, { useState } from "react";
import "./LineHeading.css";

function LineHeading(props) {
  const { text } = props;
  return (
    <div className="lineHeadingOuter">
      <div className="lineHeadingInner">
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export default LineHeading;
