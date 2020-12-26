import React, { Component } from "react";
import makeIcon from "../images/makeIcon2.png";
import modelIcon from "../images/modelIcon2.png";
import registrationCityIcon from "../images/registrationCityIcon.png";
import fuelIcon from "../images/fuelIcon.png";
import mileageIcon from "../images/mileageIcon2.png";
import engineIcon from "../images/engineIcon.jpg";
import transmissionIcon from "../images/transmissionIcon.png";
import priceIcon from "../images/priceIcon.png";
import licencePlateIcon from "../images/licenceplateIcon.png";
import yearIcon from "../images/yearIcon2.png";

class Results extends Component {
  state = {
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
      price: "2200000/- Rs",
      licencePlate: "LZX-9171",
      year: "2015",
    };
    this.setState({ car });
  }
  render() {
    const {
      make,
      model,
      year,
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
        <h1 style={{ paddingLeft: "90px" }}>
          <strong>Results</strong>
        </h1>
        <div className="row">
          <div
            className="col-sm-1"
            style={{ paddingLeft: "100px", paddingTop: "30px" }}
          >
            <img style={{ width: "120px" }} src={makeIcon} alt="" />
            <h4 style={{ marginLeft: "30px" }}>Brand</h4>
          </div>
          <div className="col-sm-1" style={{ paddingLeft: "130px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{make}</strong>
            </h4>
          </div>
          <div
            className="col-sm-1"
            style={{ paddingLeft: "275px", paddingTop: "10px" }}
          >
            <img style={{ width: "150px" }} src={modelIcon} alt="" />
            <h4 style={{ marginLeft: "45px" }}>Model</h4>
          </div>
          <div className="col-sm-1" style={{ paddingLeft: "150px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{model}</strong>
            </h4>
          </div>
          <div
            className="col-sm-1"
            style={{ paddingLeft: "250px", paddingTop: "10px" }}
          >
            <img style={{ width: "150px" }} src={yearIcon} alt="" />
            <h4 style={{ marginLeft: "45px" }}>Year</h4>
          </div>
          <div className="col-sm-1" style={{ paddingLeft: "150px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{year}</strong>
            </h4>
          </div>
        </div>

        <div className="row" style={{ paddingTop: "40px" }}>
          <div
            className="col-sm-1"
            style={{ paddingLeft: "80px", paddingTop: "10px" }}
          >
            <img style={{ width: "150px" }} src={fuelIcon} alt="" />
            <h4 style={{ marginLeft: "55px" }}>Fuel</h4>
          </div>
          <div className="col-sm-1" style={{ paddingLeft: "130px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{fuel}</strong>
            </h4>
          </div>
          <div
            className="col-sm-1"
            style={{ paddingLeft: "275px", paddingTop: "10px" }}
          >
            <img style={{ width: "150px" }} src={mileageIcon} alt="" />
            <h4 style={{ marginLeft: "45px" }}>Mileage</h4>
          </div>
          <div className="col-sm-3" style={{ paddingLeft: "150px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{mileage}</strong>
            </h4>
          </div>
          <div
            className="col-sm-1"
            style={{
              paddingLeft: "80px",
              paddingTop: "10px",
            }}
          >
            <img style={{ width: "150px" }} src={engineIcon} alt="" />
            <h4 style={{ marginLeft: "45px" }}>Engine</h4>
          </div>
          <div className="col-sm-3" style={{ paddingLeft: "110px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{engine}</strong>
            </h4>
          </div>
        </div>

        <div className="row" style={{ paddingTop: "40px" }}>
          <div
            className="col-sm-1"
            style={{ paddingLeft: "100px", paddingTop: "10px" }}
          >
            <img style={{ width: "120px" }} src={registrationCityIcon} alt="" />
            <h4 style={{ marginLeft: "15px" }}>Registration City</h4>
          </div>
          <div className="col-sm-1" style={{ paddingLeft: "135px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{registrationCity}</strong>
            </h4>
          </div>
          <div
            className="col-sm-1"
            style={{ paddingLeft: "290px", paddingTop: "10px" }}
          >
            <img style={{ width: "100px" }} src={transmissionIcon} alt="" />
            <h4>Transmission</h4>
          </div>
          <div className="col-sm-3" style={{ paddingLeft: "130px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{tranmission}</strong>
            </h4>
          </div>
          <div
            className="col-sm-1"
            style={{ paddingLeft: "80px", paddingTop: "10px" }}
          >
            <img style={{ width: "150px" }} src={licencePlateIcon} alt="" />
            <h4 style={{ marginLeft: "45px" }}>Licence Plate</h4>
          </div>
          <div className="col-sm-3" style={{ paddingLeft: "130px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{licencePlate}</strong>
            </h4>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-1 offset-sm-4"
            style={{
              paddingLeft: "100px",
              paddingTop: "20px",
              paddingBottom: "70px",
            }}
          >
            <img style={{ width: "100px" }} src={priceIcon} alt="" />
            <h4 style={{ marginLeft: "45px" }}>Price</h4>
          </div>
          <div className="col-sm-3" style={{ paddingLeft: "120px" }}>
            <h4 style={{ paddingTop: "65px" }}>
              <strong>{price}</strong>
            </h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Results;
