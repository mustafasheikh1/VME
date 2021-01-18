import React, { Component } from "react";
import { getUsers } from "../services/userService";
import hello from "../images/hello.svg";
import "../css/dashboard.css";

class DashBoard extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const { data } = await getUsers();
    const users = [];
    users[0] = data[0];
    users[1] = data[1];
    users[2] = data[2];
    users[3] = data[3];
    this.setState({ users });
  }
  render() {
    const { users } = this.state;
    const count = users.length;
    return (
      <React.Fragment>
        <nav className="navbar">
          <div className="nav_icon">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="navbar__left">
            <h4>Dashboard</h4>
          </div>
        </nav>

        <main>
          <div className="main__container">
            <div className="main__title">
              <img src={hello} alt="" />
              <div className="main__greeting">
                <h1>Hello there!</h1>
                <p>Welcome to your admin dashboard</p>
              </div>
            </div>

            <div className="main__cardds">
              <div className="cardd">
                <i
                  className="fa fa-user-o fa-2x text-lightblue"
                  aria-hidden="true"
                ></i>
                <div className="cardd_inner">
                  <p className="text-primary-p">Number of Users</p>
                  <span className="font-bold text-title">{count}</span>
                </div>
              </div>

              <div className="cardd">
                <i
                  className="fa fa-car fa-2x text-green"
                  aria-hidden="true"
                ></i>
                <div className="cardd_inner">
                  <p className="text-primary-p">Number of Cars</p>
                  <span className="font-bold text-title">645</span>
                </div>
              </div>
            </div>

            <div className="charts">
              <div className="charts__left">
                <div className="charts__left__title">
                  <div>
                    <h1>Some Registered Users</h1>
                    <p>
                      Defence Road، Off Raiwind Rd, Lda Avenue Phase 1 Lda
                      Avenue, Lahore, Punjab 54000
                    </p>
                  </div>
                  <i className="fa fa-usd" aria-hidden="true"></i>
                </div>
                <div id="apex1">
                  <table className="table">
                    <thead style={{ fontSize: "17px" }}>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: "17px" }}>
                      {users.map((user) => (
                        <tr key={user.email}>
                          <td>
                            <i
                              className="fa fa-user-o"
                              aria-hidden="true"
                              style={{ fontSize: "25px" }}
                            ></i>
                          </td>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default DashBoard;
