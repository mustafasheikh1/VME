import React, { Component } from "react";
import { getUsers, deleteUser } from "../services/userService";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Pagination from "./common/pagination";
import UsersTable from "./usersTable";
import addUserIcon from "../images/adduser.png";
import PopupBox from "./common/popupBox";
import SearchBox from "./common/searchBox";
import _ from "lodash";
import API from '../services/api';

const api = new API();


class Users extends Component {
  state = {
    users: [],
    pageSize: 7,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    display: false,
    searchQuery: "",
    originalCount: "",
  };

  async componentDidMount() {
    const users = await api.getAllUser();
    const originalCount = users.length;
    this.setState({ users, originalCount }); 
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
    const {
      users: allusers,
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = allusers;
    if (searchQuery)
      filtered = allusers.filter((u) =>
        u.firstname?.toLowerCase().startsWith(searchQuery?.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const users = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: users };
  };

  renderPopupBox = (data) => {
    const display = true;
    this.setState({ display, data });
  };

  handleCancel = () => {
    const display = false;
    this.setState({ display });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  render() {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      originalCount,
    } = this.state;
    const { data: users, totalCount: count } = this.getPagedData();

    if (originalCount === 0)
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
        <div className="row">
          <div className="col-sm-2">
            <Link
              to="/users/new"
              className="btn btn-success"
              style={{ marginTop: "15px", marginLeft: "10px", float: "right" }}
            >
              + Add User
            </Link>
          </div>
          <div className="col-sm-7">
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
          </div>
        </div>
        <div className="col-sm-12">
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
