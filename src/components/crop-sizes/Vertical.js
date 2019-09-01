import React, { Component } from "react";

class Vertical extends Component {
  render() {
    return (
      <div className="col s3 center">
        <div className="card">
          <div className="card-image">
            {this.props.cropResult ? (
              <img src={this.props.cropResult} alt="vertical" />
            ) : null}
          </div>
          <div className="card-content">
            <p>Vertical (365 x 450)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Vertical;
