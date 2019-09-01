import React from "react";
import previewPlaceholder from "../../images/preview-icon.png";

const Small = props => {
  return (
    <div className="col s3 center">
      <div className="card">
        <div className="card-image">
          {props.cropResult ? (
            <img src={props.cropResult} alt="small" />
          ) : (
            <img src={previewPlaceholder} alt="horizondal" />
          )}
        </div>
        <div className="card-content">
          <p>Small (365 x 212)</p>
        </div>
      </div>
    </div>
  );
};

export default Small;
