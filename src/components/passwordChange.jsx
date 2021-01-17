import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class PasswordChange extends Form {
  state = {
    data: {
      newPassword: "",
      confirmPassword: "",
    },
    errors: {},
    err: "",
  };

  schema = {
    newPassword: Joi.string().min(6).required().label("Password"),
    confirmPassword: Joi.string().required().label("Confirm Password"),
  };

  doSubmit = () => {
    const { newPassword, confirmPassword } = this.state.data;
    if (newPassword !== confirmPassword) {
      const error = (
        <p style={{ color: "red" }}>
          <b>Note: </b>The password does not match. Please enter the correct
          Password!
        </p>
      );
      this.setState({ error });
      return;
    }
    //call the server
    window.location = "/";
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} style={{ paddingTop: "40px" }}>
          <h1 style={{ paddingLeft: "70px" }}>Password Change</h1>

          <div
            className="row"
            style={{ paddingLeft: "110px", paddingTop: "90px" }}
          >
            <div
              className="col-sm-4"
              style={{ borderRight: "solid", paddingTop: "30px" }}
            >
              <h1>Please type your new password.</h1>
            </div>
            <div className="col-sm-4" style={{ marginLeft: "20px" }}>
              {this.renderInput("newPassword", "Password", "password")}
              {this.renderInput(
                "confirmPassword",
                "Confirm Password",
                "password"
              )}
            </div>
          </div>
          <div style={{ marginLeft: "470px" }}>
            {this.renderButton("Submit")}
          </div>
        </form>
        {this.state.error && (
          <div
            id="warning"
            style={{ paddingLeft: "150px", paddingTop: "25px" }}
          >
            {this.state.error}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default PasswordChange;
