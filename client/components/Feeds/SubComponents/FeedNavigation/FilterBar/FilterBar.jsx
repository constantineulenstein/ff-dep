import React from "react";
import { Link } from "react-router-dom";
import "./FilterBar.css";
import FeedButton from "../FeedButton/FeedButton";

function FilterBar(props) {
  const { CurrentPage } = props;
  return (
    <div className="filter-bar">
      <div className="filter-box">
        <div className="feed-box">
          <FeedButton FeedButtonKind={"Food"} CurrentPage={CurrentPage} />
          <FeedButton FeedButtonKind={"Ambience"} CurrentPage={CurrentPage} />
          <FeedButton FeedButtonKind={"Restaurant"} CurrentPage={CurrentPage} />
        </div>
        <div className="feed-box">
          <FeedButton FeedButtonKind={"Filter"} />
          <FeedButton FeedButtonKind={"Sorting"} />
        </div>
      </div>
      <div>
        <Link to="/filter-feed" id="filterTextLink">
          <span className="locationTextSpan">
            <div className="locationTextDiv">Palo Alto</div>
            <div className="restaurantTextDiv">69 Restaurants</div>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default FilterBar;
