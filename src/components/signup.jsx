import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Signup extends Form {
  state = {
    data: {},
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    name: Joi.string().required().label("Name"),
    confirmPassword: Joi.string().required().label("Confirm Password"),
    password: Joi.string().required().label("Password"),
  };

  componentDidMount() {
    const data = { name: "", username: "", password: "", confirmPassword: "" };

    this.setState({ data });
  }

  doSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container" style={{ paddingTop: "40px" }}>
        <h1>
          <strong>Register</strong>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-5">
              <h2
                style={{
                  paddingTop: "90px",
                  float: "right",
                  paddingRight: "50px",
                }}
              >
                <strong>
                  Please enter these <br></br> details to <br></br>create your
                  account.
                </strong>
              </h2>
            </div>
            <div
              className="col-sm-4"
              style={{
                borderLeft: "solid",
                paddingLeft: "40px",
                paddingBottom: "30px",
              }}
            >
              {this.renderInput("name", "Name")}
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput(
                "confirmPassword",
                "Confirm Password",
                "password"
              )}
              {this.renderButton("Register")}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
