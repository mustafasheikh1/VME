import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";
class UsersTable extends Component {
  columns = [
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
  render() {
    const { users, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
