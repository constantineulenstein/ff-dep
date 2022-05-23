import React from "react";
import { Link } from "react-router-dom";
import "./RestaurantBody.css";
import RestaurantTile from "./RestaurantTile/RestaurantTile";

function RestaurantBody({ data }) {
  return (
    <div className="restaurant-body">
      {data.map((r, i) => (
        <Link
          to={`/restaurant-details/${r.details.place_id}/${"image_1"}`}
          key={i}
        >
          <RestaurantTile
            image={
              // get the first image according to google or index 0 if something unexpected happens
              r.images[Math.max(r.image_ids.indexOf("image_1"), 0)]
            }
            name={r.details.name}
            formatted_address={r.details.formatted_address}
            opening_hours={r.details.opening_hours}
            rating={r.details.rating}
          />
        </Link>
      ))}
    </div>
  );
}

export default RestaurantBody;
