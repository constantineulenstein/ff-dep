import React from "react";
import PhotoFeed from "../SubComponents/PhotoFeed/PhotoFeed";

import { ambience_data } from "../../Data/data_loader";

function AmbienceFeed(props) {
  return (
    <div>
      <PhotoFeed CurrentPage={"AmbienceFeed"} Data={ambience_data} />
    </div>
  );
}

export default AmbienceFeed;
