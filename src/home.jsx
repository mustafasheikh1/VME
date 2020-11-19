import React, { Component } from "react";
import "./css/home.css";
import "./css/cards.css";
import carousel from "./dodge2.jpg";
class Home extends Component {
  state = {
    carouselImage: carousel,
  };
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption d-md-block">
                <div className="details">
                  <h1>Welcome to Vehicle Metadata Extraction!</h1>
                  <p>Get started With us today.</p>
                </div>
              </div>

              <img
                src={this.state.carouselImage}
                className="d-block w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
