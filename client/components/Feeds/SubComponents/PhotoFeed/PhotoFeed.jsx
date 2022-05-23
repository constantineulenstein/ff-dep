import React from "react";
import { Link } from "react-router-dom";
import FeedNavigation from "../FeedNavigation/FeedNavigation";
import MainNavigation from "../../../MainNavigation/MainNavigation";
import "./PhotoFeed.css";

function PhotoFeed(props) {
  const { CurrentPage, Data } = props;
  return (
    <div className="photoFeed">
      <FeedNavigation CurrentPage={CurrentPage} />
      <div className="photoBody">
        <ul className="photoBodyList">
          {Data.map((e) => (
            <li key={e.image}>
              <Link to={`/restaurant-details/${e.restaurant_id}/${e.image_id}`}>
                <img
                  src={e.image}
                  key={e.image}
                  className="feedImage"
                  onClick={() => console.log(e.image)}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <MainNavigation explore_flag={true} />
    </div>
  );
}

export default PhotoFeed;
