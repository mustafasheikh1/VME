import React, { Component } from "react";
import clipboard from "./clipboard.png";
class Results extends Component {
  state = {
    resultIcon: clipboard,
    car: {},
  };
  componentDidMount() {
    const car = {
      make: "Honda",
      model: "Accord",
      registrationCity: "Islamabad",
      fuel: "Petrol",
      mileage: "200,000 km",
      engine: "1600 cc",
      tranmission: "Manual",
      price: "2200000 Rs",
      licencePlate: "LZX 9171",
    };
    this.setState({ car });
  }
  render() {
    const {
      make,
      model,
      registrationCity,
      fuel,
      mileage,
      engine,
      tranmission,
      price,
      licencePlate,
    } = this.state.car;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <div
                className="carousel-inner"
                style={{
                  width: "600px",
                  marginLeft: "250px",
                }}
              >
                <div className="carousel-item active">
                  <img
                    src={this.state.resultIcon}
                    className="d-block w-100"
                    alt="..."
                    style={{ height: "500px" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "black", paddingBottom: "30px" }}>
                      Results...
                    </h5>
                    <ul
                      style={{
                        color: "black",
                        listStyleType: "none",
                        paddingBottom: "50px",
                      }}
                    >
                      <li>
                        <b>Make:</b> {make}
                      </li>
                      <li>
                        <b>Engine:</b> {engine}
                      </li>
                      <li>
                        <b>Model:</b> {model}
                      </li>
                      <li>
                        <b>Fuel:</b> {fuel}
                      </li>
                      <li>
                        <b>Mileage:</b> {mileage}
                      </li>
                      <li>
                        <b>Transmission</b>: {tranmission}
                      </li>
                      <li>
                        <b>Est Price:</b> {price}
                      </li>
                      <li>
                        <b>Registration City</b>: {registrationCity}
                      </li>
                      <li>
                        <b>Lisence Plate</b>: {licencePlate}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col"
              style={{
                paddingTop: "30px",
              }}
            ></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Results;
