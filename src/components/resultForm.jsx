import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";
import image from "../images/sideimage2.png";

class ResultForm extends Form {
  state = {
    data: {},
    sideIcon: image,
    errors: {},
  };

  schema = {
    make: Joi.string().required().label("Make"),
    model: Joi.string().required().label("Model"),
    year: Joi.string().required().label("Year"),
    engine: Joi.string().required().label("Engine"),
    fuel: Joi.string().required().label("Fuel"),
    transmission: Joi.string().required().label("Transmission"),
    licencePlate: Joi.string().required().label("Licence Plate"),
  };

  componentDidMount() {
    const data = {
      make: "Honda",
      model: "Accord",
      year: "18",
      fuel: "Petrol",
      engine: "1600 cc",
      transmission: "Manual",
      licencePlate: "LZX-9171",
    };
    this.setState({ data });
  }

  doSubmit = () => {
    //call the server
    this.props.history.push("./priceData");
  };

  render() {
    const {
      make,
      model,
      year,
      fuel,
      engine,
      transmission,
      licencePlate,
    } = this.state.data;

    return (
      <React.Fragment>
        <p style={{ paddingTop: "20px", paddingLeft: "50px" }}>
          <b>Note: </b>
          Please confirm whether these results are correct or not.
        </p>
        <div className="results" style={{ paddingLeft: "200px" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-6" style={{ borderRight: "solid" }}>
                <Input
                  name="make"
                  onChange={this.handleChange}
                  value={make}
                  id="make"
                  label="Make"
                  errors={this.state.errors}
                />
                <div className="form-group ">
                  <label htmlFor="model">
                    <b>Model</b>
                  </label>
                  <input
                    name="model"
                    onChange={this.handleChange}
                    value={model}
                    id="model"
                    type="text"
                    className="form-control "
                  />
                  {this.state.errors.model && (
                    <div className="alert alert-danger">
                      {this.state.errors.model}
                    </div>
                  )}
                </div>
                <div className="form-group ">
                  <label htmlFor="year">
                    <b>Year</b>
                  </label>
                  <input
                    name="year"
                    onChange={this.handleChange}
                    value={year}
                    id="year"
                    type="text"
                    className="form-control "
                  />
                  {this.state.errors.year && (
                    <div className="alert alert-danger">
                      {this.state.errors.year}
                    </div>
                  )}
                </div>
                <div className="form-group ">
                  <label htmlFor="engine">
                    <b>Engine</b>
                  </label>
                  <input
                    name="engine"
                    onChange={this.handleChange}
                    value={engine}
                    id="engine"
                    type="text"
                    className="form-control "
                  />
                  {this.state.errors.engine && (
                    <div className="alert alert-danger">
                      {this.state.errors.engine}
                    </div>
                  )}
                </div>
                <div className="form-group ">
                  <label htmlFor="fuel">
                    <b>Fuel</b>
                  </label>
                  <input
                    name="fuel"
                    onChange={this.handleChange}
                    value={fuel}
                    id="fuel"
                    type="text"
                    className="form-control "
                  />
                  {this.state.errors.fuel && (
                    <div className="alert alert-danger">
                      {this.state.errors.fuel}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="transmission">
                    <b>Transmission</b>
                  </label>
                  <input
                    name="transmission"
                    onChange={this.handleChange}
                    value={transmission}
                    id="transmission"
                    type="text"
                    className="form-control "
                  />
                  {this.state.errors.transmission && (
                    <div className="alert alert-danger">
                      {this.state.errors.transmission}
                    </div>
                  )}
                </div>
                <div className="form-group ">
                  <label htmlFor="licencePlate">
                    <b>Licence Plate</b>
                  </label>
                  <input
                    name="licencePlate"
                    onChange={this.handleChange}
                    value={licencePlate}
                    id="licencePlate"
                    type="text"
                    className="form-control "
                  />
                  {this.state.errors.licencePlate && (
                    <div className="alert alert-danger">
                      {this.state.errors.licencePlate}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  style={{
                    width: "400px",
                    paddingTop: "150px",
                    paddingLeft: "50px",
                  }}
                  src={this.state.sideIcon}
                  alt=""
                />
                <h4 style={{ paddingLeft: "135px" }}>
                  <b>Extracted Features</b>
                </h4>
                <p>
                  These are the features that our model has extracted from your
                  vehicle.
                </p>
              </div>
            </div>
            <div className="row" style={{ paddingTop: "10px" }}>
              <div className="col-sm-2">{this.renderButton("Confirm")}</div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ResultForm;
