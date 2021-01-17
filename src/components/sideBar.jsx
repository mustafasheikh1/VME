import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/sideBar.css";

class SideBar extends Component {
  state = {
    items: [],
    selectedItem: {
      name: "Dashboard",
      icon: <i className="fa fa-home" aria-hidden="true"></i>,
      path: "/dashboard",
    },
  };

  componentDidMount() {
    const items = [
      {
        name: "Dashboard",
        icon: <i className="fa fa-home" aria-hidden="true"></i>,
        path: "/dashboard",
      },

      {
        name: "Users",
        icon: <i className="fa fa-users" aria-hidden="true"></i>,
        path: "/users",
      },
      {
        name: "Cars",
        icon: <i className="fa fa-car" aria-hidden="true"></i>,
        path: "/ads",
      },
      {
        name: "Profile",
        icon: <i className="fa fa-user" aria-hidden="true"></i>,
        path: "/profile",
      },
    ];

    this.setState({ items });
  }

  handleItemSelect(item) {
    this.setState({ selectedItem: item });
  }

  render() {
    return (
      <React.Fragment>
        <div className="navigation">
          <h1
            style={{ color: "white", paddingLeft: "75px", paddingTop: "20px" }}
          >
            VME
          </h1>
          <p style={{ color: "white", paddingLeft: "20px" }}>
            Vehicle Metadata Extraction
          </p>
          <ul>
            {this.state.items.map((item) => (
              <li
                key={item.name}
                onClick={() => this.handleItemSelect(item)}
                className={
                  item === this.state.selectedItem
                    ? "activeItem"
                    : "non-activeItem"
                }
              >
                <Link to={item.path}>
                  <span className="icon">{item.icon}</span>
                  <span className="title">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
