import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class UsersTable extends Component {
  state = {
    columns: [],
  };

  componentDidMount() {
    const columns = [
      {
        path: "user.user_profile",
        label: "Id",
      },
      {
        path: "name",
        label: "Name",
        content: (user) => {
          console.log(user)
          return <p>{user?.firstname} {user?.lastname}</p>
        },
      },
      { path: "user.username", label: "Username" },
      { path: "user.email", label: "email" },
      {
        key: "delete",
        content: (user) => (
          <button
            onClick={() => this.props.onDelete(user)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];
    this.setState({ columns });
  }

  render() {
    const { users, onSort, sortColumn, editable } = this.props;
    console.log(editable);
    return (
      <Table
        columns={this.state.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
        editable={editable}
      />
    );
  }
}

export default UsersTable;
