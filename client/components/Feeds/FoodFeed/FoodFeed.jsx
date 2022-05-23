import React from "react";
import PhotoFeed from "../SubComponents/PhotoFeed/PhotoFeed";

import { food_data } from "../../Data/data_loader";

function FoodFeed(props) {
  return (
    <div>
      <PhotoFeed CurrentPage={"FoodFeed"} Data={food_data} />
    </div>
  );
}

export default FoodFeed;
