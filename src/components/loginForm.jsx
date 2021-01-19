import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link, Redirect } from "react-router-dom";
import API from '../services/api';

const api = new API();

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("username"),
    password: Joi.string().required().label("Password"),
  };

  componentDidMount() {
    const data = { username: "", password: "" };
    this.setState({ data });
  }

  doSubmit = async () => {
    //call the server
    const res = await api.login(this.state.data.username, this.state.data.password)
    if(res.status === 200 && res.data?.token){
      localStorage.setItem('current_usr', res.data.token)
      this.props.history.push("/");
    }
  };

  render() {

    if(localStorage.getItem('current_usr')){
      return (
        <Redirect to="/dashboard"/>
      )
    }

    return (
      <div className="container" style={{ paddingTop: "40px" }}>
        <h1 style={{ paddingLeft: "80px" }}>
          <strong>Login</strong>
        </h1>

        <div className="row">
          <div className="col-sm-6">
            <h2
              style={{
                paddingTop: "90px",
                float: "right",
                paddingRight: "20px",
              }}
            >
              <strong>
                Please enter your credentials <br /> to login to your account.
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
              {this.renderInput("username", "User name")}
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
