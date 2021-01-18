import React, { Component } from "react";
import hello from "../images/hello.svg";
import "../css/dashboard.css";

class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar">
          <div class="nav_icon" onclick="toggleSidebar()">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div class="navbar__left">
            <a href="#">Dashboard</a>
          </div>
        </nav>

        <main>
          <div class="main__container">
            <div class="main__title">
              <img src={hello} alt="" />
              <div class="main__greeting">
                <h1>Hello there!</h1>
                <p>Welcome to your admin dashboard</p>
              </div>
            </div>

            <div class="main__cardds">
              <div class="cardd">
                <i
                  class="fa fa-user-o fa-2x text-lightblue"
                  aria-hidden="true"
                ></i>
                <div class="cardd_inner">
                  <p class="text-primary-p">Number of users</p>
                  <span class="font-bold text-title">578</span>
                </div>
              </div>

              <div class="cardd">
                <i class="fa fa-car fa-2x text-red" aria-hidden="true"></i>
                <div class="cardd_inner">
                  <p class="text-primary-p">Number of cars</p>
                  <span class="font-bold text-title">2467</span>
                </div>
              </div>
            </div>

            <div class="charts">
              <div class="charts__left">
                <div class="charts__left__title">
                  <div>
                    <h1>Daily Reports</h1>
                    <p>Cupertino, California, USA</p>
                  </div>
                  <i class="fa fa-usd" aria-hidden="true"></i>
                </div>
                <div id="apex1"></div>
              </div>

              <div class="charts__right">
                <div class="charts__right__title">
                  <div>
                    <h1>Stats Reports</h1>
                    <p>Cupertino, California, USA</p>
                  </div>
                  <i class="fa fa-usd" aria-hidden="true"></i>
                </div>

                <div class="charts__right__cardds">
                  <div class="cardd1">
                    <h1>Income</h1>
                    <p>$75,300</p>
                  </div>

                  <div class="cardd2">
                    <h1>Sales</h1>
                    <p>$124,200</p>
                  </div>

                  <div class="cardd3">
                    <h1>Users</h1>
                    <p>3900</p>
                  </div>

                  <div class="cardd4">
                    <h1>Orders</h1>
                    <p>1881</p>
                  </div>
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
