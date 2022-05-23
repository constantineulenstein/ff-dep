import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavigationSection from "./NavigationSection/NavigationSection";
import RestaurantInfoSection from "./RestaurantInfoSection/RestaurantInfoSection";
import ImageSection from "./ImageSection/ImageSection";
import CommentSection from "./CommentSection/CommentSection";
import ImageFullScreen from "./ImageFullScreen/ImageFullScreen";
import "./RestaurantDetails.css";
import UserController from '../../userController';

// This will print a null error via a Promise in console in the browser since this fake user passes all of the checks we set
console.log(UserController._createUsers([['fUser', 'Fake User', 'FUser_98', 'StrongPassword123', 'fake@email.id']]));

import { data } from "../Data/data_loader";

function RestaurantDetails() {
  const [selectedImg, setSelectedImg] = useState(null);

  const { restaurant_id, image_number } = useParams();
  const restaurant = data.filter(function (row) {
    return row.details.place_id === restaurant_id;
  })[0];

  let main_image;
  for (i in restaurant.image_ids) {
    if (restaurant.image_ids[i] == image_number) {
      main_image = restaurant.images[i];
    }
  }
  const image_list = restaurant.images.filter((path) => path != main_image);

  const {
    name,
    formatted_address,
    formatted_phone_number,
    opening_hours,
    price_level,
    rating,
    user_ratings_total,
    reviews,
  } = restaurant.details;

  return (
    <div className="restaurant-details screen">
      <NavigationSection />
      <RestaurantInfoSection
        name={name}
        opening_hours={opening_hours}
        rating={rating}
        user_ratings_total={user_ratings_total}
        formatted_address={formatted_address}
        formatted_phone_number={formatted_phone_number}
      />
      <ImageSection
        main_image={main_image}
        image_list={image_list}
        setSelectedImg={setSelectedImg}
      />
      <CommentSection reviews={reviews} />
      {selectedImg && (
        <ImageFullScreen
          main_image={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      )}
    </div>
  );
}

export default RestaurantDetails;
