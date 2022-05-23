import React from "react";
import "./ImageSection.css";

function ImageSection(props) {
  const { main_image, image_list, setSelectedImg } = props;

  return (
    <div className="imageSection">
      <div>
        <img
          id="mainImage"
          src={main_image}
          className="Main-Image"
          onClick={() => setSelectedImg(main_image)}
        />
      </div>
      <div>
        <ul className="supplementImageGrid">
          {image_list.map(function (image, i) {
            return (
              <li key={i}>
                <img
                  src={image}
                  className="supplementImages"
                  onClick={() => setSelectedImg(image)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default ImageSection;
