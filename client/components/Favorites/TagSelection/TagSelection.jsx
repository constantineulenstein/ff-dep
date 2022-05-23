import React, { useState } from "react";
import Tag from "./SubComponents/Tags/Tags";
import LineHeading from "./SubComponents/LineHeading/LineHeading";
import "./TagSelection.css";

function TagSelection(props) {
  const { custom_tags_ls, list_tags_ls } = props;
  const [list_tags, setListTaggs] = useState(list_tags_ls);
  const [custom_tags, setCustomTaggs] = useState(custom_tags_ls);

  return (
    <div>
      <div className="listTags">
        <LineHeading text="LIST TAGS" />
        <ul className="tagList">
          {list_tags.map(function (tag, i) {
            return (
              <li key={i}>
                <Tag children={tag} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="customTags">
        <LineHeading text="CUSTOM TAGS" />
        <ul className="tagList">
          {custom_tags.map(function (tag, i) {
            return (
              <li key={i}>
                <Tag children={tag} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TagSelection;
