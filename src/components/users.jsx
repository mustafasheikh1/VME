import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import UsersTable from "./usersTable";
import { Link } from "react-router-dom";
import _ from "lodash";

class Users extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { movies: allMovies, pageSize, currentPage, sortColumn } = this.state;

    const sorted = _.orderBy(allMovies, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { data: movies };
  };

  render() {
    const { movies: allMovies, pageSize, currentPage, sortColumn } = this.state;
    const { length: count } = allMovies;

    if (count === 0) return <p>There are no movies in the database.</p>;
    const { data: movies } = this.getPagedData();
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-8">
            <Link
              to="/users/new"
              className="btn btn-dark"
              style={{ marginTop: "50px" }}
            >
              Add new user
            </Link>
            <p>Showing {count} movies in the database.</p>
            <UsersTable
              movies={movies}
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
