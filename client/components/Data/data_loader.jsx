import restaurant_details_data from "../z_SampleData/restaurant_details";

let restaurant_id_list = [
  "ChIJg1ayR7iwj4ARBsM83DizgKA",
  "ChIJs2q9C226j4ARohCdKz3cBH8",
  "ChIJsUowmuW6j4ARncdA5qucqUk",
  "ChIJT-J4Xze7j4ARYwN9-k8LDts",
  "ChIJtRLy85ywj4AR38KYK7uJ0Yc",
  "ChIJTzWDpDO3j4ARI08nSK_WLeU",
  "ChIJu_26IQm6j4AR_Pl-EyDdOwU",
  "ChIJu87f3CK7j4ARsO7lTOp9CIQ",
  "ChIJw4w5aNS6j4AR9LgOtniCDno",
  "ChIJYRHjWf67j4ARClGtTLToHZk",
];

function load_restaurant_details(restaurant_id) {
  return restaurant_details_data[restaurant_id];
}

function load_image(restaurant_id, image_number) {
  return `/assets/sample_data/restaurants/${restaurant_id}/photos/${image_number}.jpg`;
}

function load_labeled_images(restaurant_details) {
  const image_dict = restaurant_details.img_dict;
  const image_array = [];
  const image_id_array = [];
  const labels_array = [];
  for (const [image_number, labels] of Object.entries(image_dict)) {
    img = load_image(restaurant_details.place_id, image_number);
    image_array.push(img);
    image_id_array.push(image_number);
    labels_array.push(labels);
  }
  return { image_array, image_id_array, labels_array };
}

// load restaurant details data and save in an array of objects
// each object in the array corresponds to one restaurant
// each restaurant has multiple (labled) images
data = [];

for (const i in restaurant_id_list) {
  restaurant_details = load_restaurant_details(restaurant_id_list[i]);
  labeled_images = load_labeled_images(restaurant_details);
  rdata = {
    details: restaurant_details,
    images: labeled_images.image_array,
    image_ids: labeled_images.image_id_array,
    labels: labeled_images.labels_array,
  };
  data.push(rdata);
}

//expand array such that each entry in the array is an image
// each image is associated with a particular restaurant_id
data_expanded = [];
for (const i in data) {
  for (const j in data[i].images) {
    let image_id = data[i].images[j].split("/");
    image_id = image_id[image_id.length - 1].split(".")[0];

    rdata = {
      restaurant_id: data[i].details.place_id,
      image: data[i].images[j],
      image_id: data[i].image_ids[j],
      labels: data[i].labels[j],
    };
    data_expanded.push(rdata);
  }
}

// filter image level array, such that there are only food images
food_data = data_expanded.filter(function (restaurant) {
  return restaurant.labels[0] == "food";
});

// filter image level array, such that there are only ambience images

ambience_data = data_expanded
  .filter(function (restaurant) {
    return restaurant.labels[0] == "ambience";
  })
  .sort((a, b) => 0.5 - Math.random());

// sort images in array in random way
food_data = food_data.sort((a, b) => 0.5 - Math.random());
ambience_data = ambience_data.sort((a, b) => 0.5 - Math.random());
data = data.sort((a, b) => 0.5 - Math.random());

export { data, food_data, ambience_data };
