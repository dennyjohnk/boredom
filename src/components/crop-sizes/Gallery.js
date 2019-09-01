import React from "react";
import previewPlaceholder from "../../images/preview-icon.png";

const Gallery = props => {
  return (
    <div className="col s3 center">
      <div className="card">
        <div className="card-image">
          {props.cropResult ? (
            <img src={props.cropResult} alt="gallery" />
          ) : (
            <img src={previewPlaceholder} alt="horizondal" />
          )}
        </div>
        <div className="card-content">
          <p>Gallery (380 x 380)</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
