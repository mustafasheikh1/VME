import React, { Component } from "react";
import TutorialCard from "./common/tutorialCard";
import "./css/home.css";
import "./css/cards.css";
import carousel from "./dodge2.jpg";
import frontIcon from "./front.png";
import uploadIcon from "./uploadphoto.png";
import resultIcon from "./results.png";
class Home extends Component {
  state = {
    carouselImage: carousel,
    cards: [
      {
        _id: 1,
        Image: frontIcon,
        Label: "Taking the Photo",
        Detail: "Click the image of the car of the front",
      },
      {
        _id: 2,
        Image: uploadIcon,
        Label: "Uploading the Photo",
        Detail: "Click the image of the car from the front",
      },
      {
        _id: 3,
        Image: resultIcon,
        Label: "Getting the Results",
        Detail: "You can check the auto generated Results",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
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
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-auto">
            <h1 style={{ paddingTop: "20px" }}>Tutorial...</h1>
          </div>
        </div>
        <div className="row">
          {this.state.cards.map((card) => (
            <div
              className="col-sm-3 offset-sm-1"
              style={{ paddingTop: "20px" }}
              key={card._id}
            >
              <TutorialCard
                key={card._id}
                Image={card.Image}
                Label={card.Label}
                Detail={card.Detail}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div
            className="col-sm-2 offset-sm-5"
            style={{
              paddingTop: "50px",
              paddingLeft: "65px",
              paddingBottom: "40px",
            }}
          >
            <button className="btn btn-success">Get started</button>
          </div>
        </div>

        <div
          className="card mb-3"
          style={{ paddingTop: "20px", backgroundColor: "gray" }}
        >
          <div className="card-body">
            <h5 className="card-title" style={{ paddingLeft: "550px" }}>
              All copyrights reserved.
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
