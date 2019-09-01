import React, { Component } from "react";

class Small extends Component {
  render() {
    return (
      <div className="col s3 center">
        <div className="card">
          <div className="card-image">
            {this.props.cropResult ? (
              <img src={this.props.cropResult} alt="small" />
            ) : null}
          </div>
          <div className="card-content">
            <p>Small (365 x 212)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Small;
