import React, { useState } from "react";
import "./SymbolTag.css";

function SymbolTag(props) {
  const { image_path } = props;
  const [checked, setChecked] = useState(false);
  const checked_class = checked ? "symbolTag-checked" : "symbolTag-not-checked";

  return (
    <div>
      <button
        className={`symbolTag ${checked_class}`}
        onClick={(e) => setChecked(!checked)}
      >
        <img src={image_path} className={`symbolTagImage ${checked_class}`} />
      </button>
    </div>
  );
}

export default SymbolTag;
