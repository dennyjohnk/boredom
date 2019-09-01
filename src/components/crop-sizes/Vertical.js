import React from "react";
import previewPlaceholder from "../../images/preview-icon.png";

const Vertical = props => {
  return (
    <div className="col s3 center">
      <div className="card">
        <div className="card-image">
          {props.cropResult ? (
            <img src={props.cropResult} alt="vertical" />
          ) : (
            <img src={previewPlaceholder} alt="horizondal" />
          )}
        </div>
        <div className="card-content">
          <p>Vertical (365 x 450)</p>
        </div>
      </div>
    </div>
  );
};

export default Vertical;
