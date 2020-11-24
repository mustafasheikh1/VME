import React, { Component } from "react";
import image from "./imageicon.png";
import ReactDOM from "react-dom";
class UserData extends Component {
  state = {
    imageIcon: image,
  };

  handleChange = (e) => {
    this.setState({ imageIcon: URL.createObjectURL(e.target.files[0]) });
    console.log(e.currentTarget.files[0]);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.imageIcon === image) {
      this.handleError();
      return;
    }
    this.props.history.push("./results");
  };

  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ paddingTop: "70px" }}>
          <div className="col-sm-5">
            <h2
              style={{
                paddingTop: "120px",
                float: "right",
                paddingRight: "20px",
              }}
            >
              <strong>
                Please upload your <br></br>picture.
              </strong>
            </h2>
          </div>
          <div
            className="col-sm-4"
            style={{
              paddingTop: "60px",
              borderLeft: "solid",
              paddingLeft: "40px",
              paddingBottom: "30px",
            }}
          >
            <img
              src={this.state.imageIcon}
              className="rounded"
              alt=""
              style={{
                maxHeight: "150px",
                maxWidth: "150px",
                minHeight: "150px",
                minWidth: "150px",
              }}
            />
            <input
              style={{
                marginLeft: "25px",
              }}
              onChange={this.handleChange}
              type="file"
              alt=""
            />
            <button onClick={this.handleSubmit} className="btn btn-dark">
              Upload
            </button>
          </div>
        </div>
        <div id="warning" style={{ paddingLeft: "630px" }}></div>
      </React.Fragment>
    );
  }
  handleError = () => {
    const element = (
      <p>
        <b>Note: </b>Please choose an image first
      </p>
    );
    ReactDOM.render(element, document.getElementById("warning"));
  };
}

export default UserData;
