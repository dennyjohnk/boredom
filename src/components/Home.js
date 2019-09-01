import React from "react";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import Horizondal from "./crop-sizes/Horizondal";
import Vertical from "./crop-sizes/Vertical";
import Small from "./crop-sizes/Small";
import Gallery from "./crop-sizes/Gallery";

import SizeChooser from "./crop-sizes/SizeChooser";

import Image from "../images/image.jpg";
const src = Image;

class Home extends React.Component {
  _crop() {
    // image in dataUrl. we can use this to show in gallery
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }
  state = {
    src,
    aspectX: null,
    aspectY: null,
    cropResult: []
  };

  //upload image
  onImageUpload = e => {
    e.preventDefault();
    let files;

    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();

    reader.onload = () => {
      let image = new window.Image();
      image.src = reader.result;

      //check image size
      image.onload = () => {
        console.log(image);
        if (image.width !== 1024 && image.height !== 1024) {
          alert("Please upload a 1024 x 1024 image !");
        } else {
          this.setState({ src: reader.result });
        }
      };
    };
    reader.readAsDataURL(files[0]);
  };

  //use default image
  useDefaultImage = () => {
    this.setState({ src });
  };

  //crop image on click
  cropImage = sizeId => {
    const newCropResults = this.state.cropResult.slice();
    newCropResults[
      sizeId - 1
    ] = this.refs.cropper.getCroppedCanvas().toDataURL();

    if (typeof this.refs.cropper.getCroppedCanvas() === "undefined") {
      return;
    }

    this.setState({
      cropResult: newCropResults
    });
  };

  updateCropFrame = sizeId => {
    switch (sizeId.size) {
      case 1:
        this.setState({
          aspectX: 151,
          aspectY: 90
        });
        break;
      case 2:
        this.setState({
          aspectX: 73,
          aspectY: 90
        });
        break;
      case 3:
        this.setState({
          aspectX: 365,
          aspectY: 212
        });
        break;
      case 4:
        this.setState({
          aspectX: 1,
          aspectY: 1
        });
        break;
      default:
        this.setState({
          aspectX: 1,
          aspectY: 1
        });
    }
  };

  render() {
    return (
      <div className="container">
        {/* Cropper UI */}
        <div className="row">
          <div className="col s10">
            <div className="card">
              <Cropper
                ref="cropper"
                src={this.state.src}
                style={{ height: 400, width: "100%" }}
                preview=".img-preview"
                aspectRatio={this.state.aspectX / this.state.aspectY}
                guides={true}
                cropBoxResisable={false}
                crop={this._crop.bind(this)}
                dragCrop={false}
                cropBoxResizable={false}
              />
            </div>
          </div>
          <div className="col s2 padding-10">
            <button
              onClick={this.useDefaultImage.bind(this)}
              className="margin-bottom-20"
            >
              Use default img
            </button>

            <input
              className="margin-bottom-20"
              type="file"
              accept="image/*"
              onChange={this.onImageUpload.bind(this)}
            />
            <SizeChooser
              cropImage={this.cropImage.bind(this)}
              cropFrame={this.updateCropFrame.bind(this)}
            />
          </div>
        </div>

        <div className="row">
          <Horizondal
            cropImage={this.cropImage.bind(this)}
            cropResult={this.state.cropResult[0]}
          />

          <Vertical
            cropImage={this.cropImage.bind(this)}
            cropResult={this.state.cropResult[1]}
          />

          <Small
            cropImage={this.cropImage.bind(this)}
            cropResult={this.state.cropResult[2]}
          />

          <Gallery
            cropImage={this.cropImage.bind(this)}
            cropResult={this.state.cropResult[3]}
          />
        </div>
      </div>
    );
  }
}

export default Home;
