import React from "react";
import { Link } from "react-router-dom";
import "./FeedButton.css";

function FeedButton(props) {
  const { FeedButtonKind, CurrentPage } = props;
  let clicked = false;
  let src_path = "/ff-dep/assets/icons/watermelon.svg";
  let link_path = "/food-feed";
  switch (String(FeedButtonKind)) {
    case "Food":
      src_path = "/ff-dep/assets/icons/watermelon.svg";
      link_path = "/food-feed";
      if (String(CurrentPage) == "FoodFeed") {
        clicked = true;
      }
      break;
    case "Ambience":
      src_path = "/ff-dep/assets/icons/house.svg";
      link_path = "/ambience-feed";
      if (String(CurrentPage) == "AmbienceFeed") {
        clicked = true;
      }
      break;
    case "Restaurant":
      src_path = "/ff-dep/assets/icons/list.svg";
      link_path = "/restaurant-feed";
      if (String(CurrentPage) == "RestaurantFeed") {
        clicked = true;
      }
      break;
    case "Filter":
      src_path = "/ff-dep/assets/icons/filter.svg";
      link_path = "/filter-feed";
      break;
    case "Sorting":
      src_path = "/ff-dep/assets/icons/sorting.svg";
      link_path = "/sorting-feed";
      break;
  }

  return (
    <Link to={link_path}>
      <div className={FeedButtonKind + " FeedButton"}>
        <img
          className={"FeedButtonIcon " + (clicked ? "SVGGreen" : "SVGBlack")}
          src={src_path}
        />
      </div>
    </Link>
  );
}

export default FeedButton;
