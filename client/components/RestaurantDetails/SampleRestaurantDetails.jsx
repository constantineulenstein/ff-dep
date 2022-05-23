import main_img from "../../sample_data/restaurant/photos/image_7.jpg";
import img1 from "../../sample_data/restaurant/photos/image_1.jpg";
import img2 from "../../sample_data/restaurant/photos/image_2.jpg";
import img3 from "../../sample_data/restaurant/photos/image_3.jpg";
import img4 from "../../sample_data/restaurant/photos/image_4.jpg";
import img5 from "../../sample_data/restaurant/photos/image_5.jpg";
import img6 from "../../sample_data/restaurant/photos/image_6.jpg";
import img7 from "../../sample_data/restaurant/photos/image_8.jpg";
import img8 from "../../sample_data/restaurant/photos/image_9.jpg";
import img9 from "../../sample_data/restaurant/photos/image_10.jpg";

import data from "../../sample_data/restaurant/place_details_clean.json";

const {
  name,
  formatted_address,
  formatted_phone_number,
  opening_hours,
  price_level,
  rating,
  user_ratings_total,
  reviews,
} = data;

const main_image = main_img;
const image_list = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default {
  name,
  formatted_address,
  formatted_phone_number,
  opening_hours,
  price_level,
  rating,
  user_ratings_total,
  reviews,
  main_image,
  image_list,
};
