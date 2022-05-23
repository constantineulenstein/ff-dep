import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import FoodFeed from "./components/Feeds/FoodFeed/FoodFeed";
import AmbienceFeed from "./components/Feeds/AmbienceFeed/AmbienceFeed";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import RestaurantFeed from "./components/Feeds/RestaurantFeed/RestaurantFeed";
import FilterFeed from "./components/Settings/FilterFeed/FilterFeed";
import SortFeed from "./components/Settings/SortFeed/SortFeed";
import TagsFeed from "./components/Favorites/TagsFeed/TagsFeed";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FoodFeed />} />
        <Route path="/food-feed" element={<FoodFeed />} />
        <Route path="/ambience-feed" element={<AmbienceFeed />} />
        <Route path="/restaurant-feed" element={<RestaurantFeed />} />
        <Route path="/restaurant-details" element={<RestaurantDetails />} />
        <Route
          path="/restaurant-details/:restaurant_id/:image_number"
          element={<RestaurantDetails />}
        />
        <Route path="/filter-feed" element={<FilterFeed />} />
        <Route path="/sorting-feed" element={<SortFeed />} />
        <Route path="/test" element={<SideMenu />} />
        <Route path="/personal-tags" element={<TagsFeed />} />
      </Routes>
    </Router>
  );
}
export default App;
