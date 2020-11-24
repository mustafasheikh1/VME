import React, { Component } from "react";
import image from "./imageicon.png";

class UserData extends Component {
  state = {
    imageIcon: image,
  };

  handleChange = (e) => {
    // const imageIcon = e.currentTarget.files[0];
    // this.setState({ imageIcon });
    this.setState({ imageIcon: URL.createObjectURL(e.target.files[0]) });
    console.log(e.currentTarget.files[0]);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("./results");
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12">
            <h2 style={{ paddingTop: "20px", paddingLeft: "30px" }}>
              <strong>Please upload your picture.</strong>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 offset-sm-4">
            <div className="text-center" style={{ paddingTop: "40px" }}>
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
            </div>
          </div>
        </div>

        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col-sm-2 offset-sm-5">
            <input onChange={this.handleChange} type="file" alt="" />
          </div>
          <div className="col-sm-2">
            <button onClick={this.handleSubmit} className="btn btn-dark">
              Upload
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserData;
