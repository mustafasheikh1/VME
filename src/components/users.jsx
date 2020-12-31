import React, { Component } from "react";
import { getUsers, deleteUser } from "../services/userService";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import Pagination from "./common/pagination";
import UsersTable from "./usersTable";
import _ from "lodash";
import { toast } from "react-toastify";

class Users extends Component {
  state = {
    users: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }

  handleDelete = async (user) => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter((u) => u.id !== user.id);
    this.setState({ users });
    try {
      await deleteUser(user);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This user has already been deleted");

      this.setState({ users: originalUsers });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { users: allusers, pageSize, currentPage, sortColumn } = this.state;

    const sorted = _.orderBy(allusers, [sortColumn.path], [sortColumn.order]);
    const users = paginate(sorted, currentPage, pageSize);
    return { data: users };
  };

  render() {
    const { users: allUsers, pageSize, currentPage, sortColumn } = this.state;
    const { length: count } = allUsers;
    <Link
      to="/users/new"
      className="btn btn-dark"
      style={{ marginTop: "50px" }}
    >
      Add new user
    </Link>;
    if (count === 0) return <p>There are no users in the database.</p>;
    const { data: users } = this.getPagedData();
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-10">
            <Link
              to="/users/new"
              className="btn btn-dark"
              style={{ marginTop: "50px", marginBottom: "20px" }}
            >
              Add new user
            </Link>
            <p>Showing {count} users in the database.</p>
            <UsersTable
              users={users}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
