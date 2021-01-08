import React from "react";
import Form from "../components/common/form";
import Joi from "joi-browser";
import { getUser, saveUser } from "../services/userService";
import userIcon from "../images/userIcon.png";
class UserForm extends Form {
  state = {
    data: {
      name: "",
      username: "",
      email: "",
      editable: false,
    },
    errors: {},
  };

  schema = {
    id: Joi.number().min(0).label("Id"),
    name: Joi.string().required().label("Name"),
    username: Joi.string().required().label("Username"),
    email: Joi.string().required().label("Email"),
    confirmPassword: Joi.string().label("Confirm Password"),
    password: Joi.string().label("Password"),
  };

  async populateUser() {
    try {
      const userId = this.props.match.params.id;
      if (userId === "new") {
        const data = { ...this.state.data };
        data["password"] = "";
        data["confirmPassword"] = "";
        this.setState({ data });
        return;
      }

      const { data: user } = await getUser(userId);
      this.setState({ data: this.mapToViewModel(user) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    if (this.props.match.params.id === "new") {
      const editable = true;
      this.setState({ editable });
    }
    await this.populateUser();
  }

  mapToViewModel(user) {
    return {
      name: user.name,
      username: user.username,
      email: user.email,
    };
  }

  doSubmit = async () => {
    await saveUser(this.state.data);
    this.props.history.push("/users");
  };

  handleEdit = () => {
    let editable = this.state.editable;
    editable = editable === true ? false : true;
    this.setState({ editable });
  };

  render() {
    const { data: user, editable } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <h1 style={{ paddingTop: "40px" }}>
            <strong>User Form</strong>
          </h1>
          {!editable && (
            <button
              className="btn btn-danger"
              onClick={this.handleEdit}
              style={{ marginLeft: "735px" }}
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
            </button>
          )}
          {!this.props.match.params.id === "new" && editable && (
            <button
              className="btn btn-success"
              onClick={this.handleEdit}
              style={{ marginLeft: "735px" }}
            >
              <i className="fa fa-check" aria-hidden="true"></i> Done
            </button>
          )}
          <div
            className="row"
            style={{ paddingLeft: "65px", paddingTop: "10px" }}
          >
            <div className="col-sm-3">
              <img
                src={userIcon}
                alt=""
                style={{ width: "150px", paddingTop: "80px" }}
              />

              {user.username && (
                <h2
                  style={{
                    paddingTop: "10px",
                    paddingRight: "70px",
                    fontSize: "25px",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <strong>{user.username} </strong>
                </h2>
              )}
              {!user.username && (
                <h2 style={{ paddingTop: "10px", paddingLeft: "5px" }}>
                  <strong>New User </strong>
                </h2>
              )}
            </div>
            {editable && (
              <div
                className="col-sm-6"
                style={{ borderLeft: "solid", paddingLeft: "50px" }}
              >
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("name", "Name")}
                  {this.renderInput("username", "Username")}
                  {this.renderInput("email", "Email")}
                  {this.props.match.params.id === "new" && (
                    <React.Fragment>
                      {this.renderInput("password", "Password", "password")}
                      {this.renderInput(
                        "confirmPassword",
                        "Confirm Password",
                        "password"
                      )}
                    </React.Fragment>
                  )}
                  {this.renderButton("Save")}
                </form>
              </div>
            )}
            {!editable && (
              <div className="col-sm-8">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <h3>Name:</h3>
                        <p>{user.name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Username:</h3>
                        <p>{user.username}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Email:</h3>
                        <p>{user.email}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserForm;
