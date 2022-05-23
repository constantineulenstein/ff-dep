import React from "react";
import Tags from "../../TagSelection/SubComponents/Tags/Tags";
import SymbolTag from "../SubComponents/SymbolTag/SymbolTag";
import "./TagsFeedFilter.css";

export default function TagsFeedFilter() {
  return (
    <div className="TagsFeedFilterSection">
      <SymbolTag image_path="/assets/icons/watermelon.svg" />
      <SymbolTag image_path="/assets/icons/house.svg" />
      <SymbolTag image_path="/assets/icons/list.svg" />
      <Tags children="hiii" />
      <Tags children="Favorites" />
      <Tags children="Tasty" />
    </div>
  );
}
