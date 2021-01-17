import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link } from "react-router-dom";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("E-mail"),
    password: Joi.string().required().label("Password"),
  };

  componentDidMount() {
    const data = { email: "", password: "" };
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
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("email", "E-mail")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
              <Link to="/signup" style={{ paddingLeft: "200px" }}>
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
