import React from "react";
import Form from "../components/common/form";
import Joi from "joi-browser";
import { getUser, saveUser } from "../services/userService";
import userIcon from "../images/userIcon.png";
class UserForm extends Form {
  state = {
    data: {
      id: "",
      name: "",
      username: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    id: Joi.number().min(0).label("Id"),
    name: Joi.string().required().label("Name"),
    username: Joi.string().required().label("Username"),
    email: Joi.string().required().label("Number in Stock"),
  };

  async populateUser() {
    try {
      const userId = this.props.match.params.id;
      if (userId === "new") return;

      const { data: user } = await getUser(userId);
      this.setState({ data: this.mapToViewModel(user) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateUser();
  }

  mapToViewModel(user) {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    };
  }

  doSubmit = async () => {
    await saveUser(this.state.data);
    this.props.history.push("/users");
  };

  render() {
    const { data: user } = this.state;
    return (
      <React.Fragment>
        <h1 style={{ paddingTop: "40px" }}>
          <strong>User Form</strong>
        </h1>
        <div
          className="row"
          style={{ paddingLeft: "65px", paddingTop: "10px" }}
        >
          <div className="col-sm-3">
            <img
              src={userIcon}
              alt=""
              style={{ width: "150px", paddingTop: "110px" }}
            />

            {user.username && (
              <h2 style={{ paddingTop: "10px", paddingLeft: "5px" }}>
                <strong>{user.username} </strong>
              </h2>
            )}
            {!user.username && (
              <h2 style={{ paddingTop: "10px", paddingLeft: "5px" }}>
                <strong>New User </strong>
              </h2>
            )}
          </div>
          <div
            className="col sm-3"
            style={{ borderLeft: "solid", paddingLeft: "50px" }}
          >
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("id", "Id", "number")}
              {this.renderInput("name", "Name")}
              {this.renderInput("username", "Username")}
              {this.renderInput("email", "Email")}
              {this.renderButton("Save")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserForm;
