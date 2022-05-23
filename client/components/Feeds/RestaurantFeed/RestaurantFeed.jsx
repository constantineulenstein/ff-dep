import React from "react";
import FeedNavigation from "../Subcomponents/FeedNavigation/FeedNavigation";
import RestaurantBody from "./RestaurantBody/RestaurantBody";
import MainNavigation from "../../MainNavigation/MainNavigation";
import "./RestaurantFeed.css";

import { data } from "../../Data/data_loader";

function RestaurantFeed(props) {
  return (
    <div className="restaurant-feed">
      <FeedNavigation CurrentPage="RestaurantFeed" />
      <RestaurantBody data={data} />
      <MainNavigation explore_flag={true} />
    </div>
  );
}

export default RestaurantFeed;
