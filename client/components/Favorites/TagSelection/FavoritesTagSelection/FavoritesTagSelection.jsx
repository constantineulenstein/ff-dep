import React, { useState } from "react";
import TagSelection from "../TagSelection";
import "./FavoritesTagSelection.css";

function FavoritesTagSelection(props) {
  // const { custom_tags_ls, list_taggs_ls } = props;
  const [tagsButtonClicked, setTagsButtonClicked] = useState(false);
  const list_tags_ls = ["Favorites", "Want to go"];
  const custom_tags_ls = ["Veggie", "Fancy"];

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setTagsButtonClicked(false);
    }
  };

  let tags_screen;
  if (tagsButtonClicked) {
    tags_screen = (
      <div id="favoritesTagScreen" className="backdrop" onClick={handleClick}>
        <div id="favoritesTagContainer">
          <TagSelection
            custom_tags_ls={custom_tags_ls}
            list_tags_ls={list_tags_ls}
          />
        </div>
      </div>
    );
  }

  return (
    <div id="tagsFeedFilterIconContainer">
      <img
        src="/assets/icons/filter.svg"
        id="tagsFeedFilterIcon"
        onClick={() => setTagsButtonClicked(true)}
      />
      {tags_screen}
    </div>
  );
}

export default FavoritesTagSelection;
