import React from "react";
import "./SearchBar.css";
import SideMenu from "../../../../SideMenu/SideMenu";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <SideMenu />
      <div className="searchField">
        <div className="searchBarText">Search</div>
      </div>
    </div>
  );
}

export default SearchBar;
