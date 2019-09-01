import React from "react";
import previewPlaceholder from "../../images/preview-icon.png";

const Horizondal = props => {
  return (
    <div className="col s3 center">
      <div className="card">
        <div className="card-image">
          {props.cropResult ? (
            <img src={props.cropResult} alt="horizondal" />
          ) : (
            <img src={previewPlaceholder} alt="horizondal" />
          )}
        </div>
        <div className="card-content">
          <p>Horizondal (755 x 450)</p>
        </div>
      </div>
    </div>
  );
};

export default Horizondal;
