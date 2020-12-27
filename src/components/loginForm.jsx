import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Login extends Form {
  state = {
    data: {},
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  componentDidMount() {
    const data = { username: "", password: "" };
    this.setState({ data });
  }

  doSubmit = () => {
    //call the server
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container" style={{ paddingTop: "40px" }}>
        <h1>
          <strong>Login</strong>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-5">
              <h2
                style={{
                  paddingTop: "70px",
                  float: "right",
                  paddingRight: "20px",
                }}
              >
                <strong>
                  Please enter your credentials to login to your account.
                </strong>
              </h2>
            </div>
            <div
              className="col-sm-4"
              style={{
                paddingTop: "40px",
                borderLeft: "solid",
                paddingLeft: "40px",
                paddingBottom: "30px",
              }}
            >
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
