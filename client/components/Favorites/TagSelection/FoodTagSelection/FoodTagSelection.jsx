import React, { useState } from "react";
import TagSelection from "../TagSelection";
import "./FoodTagSelection.css";

function FoodTagSelection(props) {
  // const { custom_tags_ls, list_taggs_ls } = props;
  const [tagsButtonClicked, setTagsButtonClicked] = useState(false);
  const list_tags_ls = ["Favorites", "Want to go"];
  const custom_tags_ls = ["Unhealthy Sin", "Tasty"];

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setTagsButtonClicked(false);
    }
  };

  let tags_screen;
  if (tagsButtonClicked) {
    tags_screen = (
      <div id="foodTagScreen" className="backdrop" onClick={handleClick}>
        <div id="foodTagContainer">
          <TagSelection
            custom_tags_ls={custom_tags_ls}
            list_tags_ls={list_tags_ls}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="foodTagsComponent">
      <img
        className="SVGWhite imageFullscreenIcon"
        src="/assets/icons/white-taggs.svg"
        onClick={() => setTagsButtonClicked(true)}
      />
      {tags_screen}
    </div>
  );
}

export default FoodTagSelection;
