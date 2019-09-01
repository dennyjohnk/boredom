import React, { Component } from "react";

class Horizondal extends Component {
  render() {
    return (
      <div className="col s3 center">
        <div className="card">
          <div className="card-image">
            {this.props.cropResult ? (
              <img src={this.props.cropResult} alt="horizondal" />
            ) : null}
          </div>
          <div className="card-content">
            <p>Horizondal (755 x 450)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Horizondal;
