import React, { Component } from "react";
import { Link } from "react-router-dom";
import car from "../images/car.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/lambo.jpg";
import car4 from "../images/new car.jpg";
class Ads extends Component {
  state = {
    ads: [
      { img: car, price: "10,000$", name: "Mercedes" },
      { img: car2, price: "50,000$", name: "Lambo" },
      { img: car3, price: "24,000$", name: "Lamborghini" },
      { img: car4, price: "1700$", name: "Spyder" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Ads</h1>
          <div className="card text-center" style={{ width: "15rem" }}>
            <img src={car2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lamborghini 10,000$</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="" className="btn btn-success">
                Check Car
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Ads;
