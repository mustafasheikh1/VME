import React from "react";
import Form from "../components/common/form";
import Joi from "joi-browser";
import { getUser } from "../services/userService";
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

  doSubmit = () => {
    //saveUser(this.state.data);
    this.props.history.push("/users");
  };

  render() {
    return (
      <React.Fragment>
        <h1>User Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("id", "Id", "number")}
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email")}
          {this.renderButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default UserForm;
