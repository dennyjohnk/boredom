import React, { Component } from "react";
import previewPlaceholder from "../../images/preview-icon.png";

class Gallery extends Component {
  render() {
    return (
      <div className="col s3 center">
        <div className="card">
          <div className="card-image">
            {this.props.cropResult ? (
              <img src={this.props.cropResult} alt="gallery" />
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
  }
}

export default Gallery;
