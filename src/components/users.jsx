import React, { Component } from "react";
import { getUsers, deleteUser } from "../services/userService";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Pagination from "./common/pagination";
import UsersTable from "./usersTable";
import addUserIcon from "../images/adduser.png";
import PopupBox from "./common/popupBox";
import _ from "lodash";

class Users extends Component {
  state = {
    users: [],
    pageSize: 7,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    display: false,
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }

  handleDelete = async (user) => {
    const originalUsers = this.state.users;
    const display = false;

    const users = originalUsers.filter((u) => u.id !== user.id);
    this.setState({ users, display });
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

  renderPopupBox = (data) => {
    const display = true;
    this.setState({ display, data });
  };

  handleCancel = () => {
    const display = false;
    this.setState({ display });
  };

  render() {
    const { users: allUsers, pageSize, currentPage, sortColumn } = this.state;
    const { length: count } = allUsers;

    if (count === 0)
      return (
        <div>
          <img
            src={addUserIcon}
            alt=""
            style={{ paddingLeft: "300px", paddingTop: "120px" }}
          />

          <Link
            to="/users/new"
            className="btn btn-success"
            style={{ marginTop: "170px" }}
          >
            + Add User
          </Link>
          <p style={{ paddingLeft: "270px", fontSize: "20px" }}>
            There are no users in the database.
          </p>
          <p style={{ paddingLeft: "220px", fontSize: "20px" }}>
            Want to add some users? Click on the button
          </p>
        </div>
      );
    const { data: users } = this.getPagedData();
    return (
      <React.Fragment>
        {this.state.display && (
          <PopupBox
            onCancel={this.handleCancel}
            data={this.state.data}
            onDelete={this.handleDelete}
            label={"user"}
          />
        )}

        <div className="col-sm-12">
          <Link
            to="/users/new"
            className="btn btn-success"
            style={{ marginTop: "10px" }}
          >
            + Add new user
          </Link>

          <p style={{ fontSize: "20px" }}>
            Showing {count} users in the database.
          </p>

          <UsersTable
            users={users}
            onDelete={this.renderPopupBox}
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
      </React.Fragment>
    );
  }
}

export default Users;
