import React, { Component } from "react";
import image from "../images/imageicon.png";

class UserData extends Component {
  state = {
    imageIcon: image,
    error: "",
  };

  handleChange = (e) => {
    this.setState({ imageIcon: URL.createObjectURL(e.target.files[0]) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.imageIcon === image) {
      const error = (
        <p style={{ color: "red" }}>
          <b>Note: </b>Please choose an image first.
        </p>
      );
      this.setState({ error });
      return;
    }
    this.props.history.push("./formResults");
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
        {this.state.error && (
          <div id="warning" style={{ paddingLeft: "630px" }}>
            {this.state.error}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default UserData;
