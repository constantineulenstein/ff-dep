import React from "react";
import "./RestaurantTile.css";

export default function RestaurantTile(props) {
  const { image, name, formatted_address, opening_hours, rating } = props;
  return (
    <div>
      <div className="restaurant-box">
        <img className="restaurant-image" src={image} />
        <div className="top-bar">
          <h1 className="restaurant-title">{name}</h1>
        </div>
        <div className="bottom-bar">
          <div className="address-and-opening">
            <p className="restaurant-details-text">{formatted_address}</p>
            <p className="restaurant-details-text">
              {opening_hours.weekday_text[0]}
            </p>
          </div>
          <p className="rating restaurant-details-text">
            {"Rating: " + rating}
          </p>
        </div>
      </div>
    </div>
  );
}
