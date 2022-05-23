import React from "react";
import TagsFeedNavigation from "./TagsFeedNavigation/TagsFeedNavigation";
import TagsFeedFilter from "./TagsFeedFilter/TagsFeedFilter";
import MainNavigation from "../../MainNavigation/MainNavigation";
import "./TagsFeed.css";

export default function TagsFeed(props) {
  const tagged_restaurants = {
    favorite: ["restaurant_id1", "restaurant_id2"],
    want_to_go: ["restaurant_id2", "restaurant_id3"],
  };
  const tagged_food = {
    favorite: [{ restaurant_id1: "food_id1" }, { restaurant_id5: "food_id2" }],
    want_to_eat: [
      { restaurant_id1: "food_id3" },
      { restaurant_id6: "food_id4" },
    ],
  };

  return (
    <div id="tagsFeed">
      <TagsFeedNavigation />
      <TagsFeedFilter />
      <MainNavigation />
    </div>
  );
}
