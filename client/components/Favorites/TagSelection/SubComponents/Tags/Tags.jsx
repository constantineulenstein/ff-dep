import React, { useState } from "react";
import "./Tags.css";

function Tag(props) {
  const { children } = props;
  const [checked, setChecked] = useState(false);
  const checked_class = checked ? "tag-checked" : "tag-not-checked";

  return (
    <div>
      <button
        className={`tag ${checked_class}`}
        onClick={(e) => setChecked(!checked)}
      >
        {children}
      </button>
    </div>
  );
}

export default Tag;
