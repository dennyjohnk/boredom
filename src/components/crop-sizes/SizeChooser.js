import React, { Component } from "react";

class SizeChooser extends Component {
  constructor() {
    super();

    this.state = {
      size: 1
    };
  }

  handleChange(e) {
    this.setState(
      {
        size: parseInt(e.target.value)
      },
      () => {
        this.props.cropFrame(this.state);
      }
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.cropImage(this.state.size);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            <input
              className="with-gap"
              type="radio"
              checked={this.state.size === 1}
              value="1"
              onChange={this.handleChange.bind(this)}
            />
            <span>Horizondal (755 x 450)</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              type="radio"
              value="2"
              checked={this.state.size === 2}
              onChange={this.handleChange.bind(this)}
            />
            <span>Vertical (365 x 450)</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              type="radio"
              value="3"
              checked={this.state.size === 3}
              onChange={this.handleChange.bind(this)}
            />
            <span>Small (365 x 212)</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              type="radio"
              value="4"
              checked={this.state.size === 4}
              onChange={this.handleChange.bind(this)}
            />
            <span>Gallery (380 x 380)</span>
          </label>
        </p>
        <button type="submit">Crop Image</button>
      </form>
    );
  }
}

export default SizeChooser;
