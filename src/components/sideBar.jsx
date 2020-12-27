import React from "react";
import "../css/sideBar.css";
const SideBar = () => {
  return (
    <React.Fragment>
      <div className="navigation">
        <ul>
          <li>
            <a href="!#">
              <span className="icon">
                <i class="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="title">Profile</span>
            </a>
          </li>
          <li>
            <a href="!#">
              <span className="icon">
                <i class="fa fa-users" aria-hidden="true"></i>
              </span>
              <span className="title">Users</span>
            </a>
          </li>
          <li>
            <a href="!#">
              <span className="icon">
                <i class="fa fa-cog" aria-hidden="true"></i>
              </span>
              <span className="title">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
