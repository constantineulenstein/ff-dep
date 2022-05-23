import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import FilterBar from "./FilterBar/FilterBar";
import "./FeedNavigation.css";

function FeedNaviagtion(props) {
  const { CurrentPage } = props;
  return (
    <div className="feedNavigation">
      <SearchBar />
      <FilterBar CurrentPage={CurrentPage} />
    </div>
  );
}

export default FeedNaviagtion;
