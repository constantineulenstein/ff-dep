import React from "react";
import FoodTagSelection from "../../Favorites/TagSelection/FoodTagSelection/FoodTagSelection";
import "./ImageFullScreen.css";

function ImageFullScreen(props) {
  const { main_image, setSelectedImg } = props;

  const handleClick = (e) => {
    setSelectedImg(null);
  };

  return (
    <div className="imageFullScreen">
      <div className="imageFullScreenNavigation">
        <img
          className="SVGWhite imageFullscreenIcon"
          src="/assets/icons/arrow-left.svg"
          onClick={handleClick}
        />
        <FoodTagSelection image_id={main_image} />
      </div>
      <div>
        <img src={main_image} className="imageFullScreenImage" />
      </div>
    </div>
  );
}

export default ImageFullScreen;
