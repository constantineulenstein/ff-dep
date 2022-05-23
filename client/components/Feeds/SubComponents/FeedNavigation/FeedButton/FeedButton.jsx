import React from "react";
import { Link } from "react-router-dom";
import "./FeedButton.css";

function FeedButton(props) {
  const { FeedButtonKind, CurrentPage } = props;
  let clicked = false;
  switch (String(FeedButtonKind)) {
    case "Food":
      src_path = "/assets/icons/watermelon.svg";
      link_path = "/food-feed";
      if (String(CurrentPage) == "FoodFeed") {
        clicked = true;
      }
      break;
    case "Ambience":
      src_path = "/assets/icons/house.svg";
      link_path = "/ambience-feed";
      if (String(CurrentPage) == "AmbienceFeed") {
        clicked = true;
      }
      break;
    case "Restaurant":
      src_path = "/assets/icons/list.svg";
      link_path = "/restaurant-feed";
      if (String(CurrentPage) == "RestaurantFeed") {
        clicked = true;
      }
      break;
    case "Filter":
      src_path = "/assets/icons/filter.svg";
      link_path = "/filter-feed";
      break;
    case "Sorting":
      src_path = "/assets/icons/sorting.svg";
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
