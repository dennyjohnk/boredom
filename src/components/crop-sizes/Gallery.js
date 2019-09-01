import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div className="col s3 center">
        <div className="card">
          <div className="card-image">
            {this.props.cropResult ? (
              <img src={this.props.cropResult} alt="gallery" />
            ) : null}
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
