import React from "react";
import "./RestaurantInfoSection.css";
import RestaurantTagSelection from "../../Favorites/TagSelection/RestaurantTagSelection/RestaurantTagSelection";

function RestaurantInfoSection({
  name,
  rating,
  user_ratings_total,
  opening_hours,
  formatted_address,
  formatted_phone_number,
}) {
  return (
    <div>
      <div className="Title-Section">
        <div>
          <h3 id="restaurantDetailsTitle">{name}</h3>
        </div>
        <RestaurantTagSelection />
      </div>
      <div id="Details-Section-Outer">
        <div id="Details-Section-Inner">
          <div>
            <ul className="restaurantDetailsInfoText">
              <li>
                Rating: {rating} ({user_ratings_total})
              </li>
              <li>Open today: {opening_hours.weekday_text[0]}</li>
              <li>{formatted_address}</li>
              <li>Telephone: {formatted_phone_number}</li>
            </ul>
          </div>
          <div className="callMapIcons">
            <img
              className="restaurantInfoIcon"
              src="/assets/icons/telephone.svg"
            />
            <img
              className="restaurantInfoIcon"
              src="/assets/icons/navigation.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfoSection;
