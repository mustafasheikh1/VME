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
        path: "id",
        label: "Id",
      },
      {
        path: "name",
        label: "Name",
        content: (user) => <Link to={`/users/${user.id}`}>{user.name}</Link>,
      },
      { path: "username", label: "Username" },
      { path: "email", label: "email" },
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
