import React, { Component } from "react";
import Joi from "joi-browser";
import mileagepic from "./mileage.png";
import city from "./registrationCityIcon.png";
class PriceData extends Component {
  state = {
    mileageIcon: mileagepic,
    cityIcon: city,
    price: {
      registrationCity: "",
      mileage: "",
    },
    errors: {},
  };

  schema = {
    mileage: Joi.string().required().label("Mileage"),
    registrationCity: Joi.string().required().label("Registration City"),
  };

  handleChange = (e) => {
    const price = { ...this.state.price };
    price[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ price });
  };

  validate = () => {
    const result = Joi.validate(this.state.price, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.props.history.push("./results");
  };

  render() {
    const { mileage, registrationCity } = this.state.price;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} style={{ paddingTop: "150px" }}>
          <div className="row" style={{ paddingLeft: "125px" }}>
            <div className="col-sm-4" style={{ borderRight: "solid" }}>
              <h1>Please enter these details for price calculation</h1>
            </div>
            <div
              className="col-sm-1 "
              style={{ paddingLeft: "50px", float: "right" }}
            >
              <img
                style={{ width: "60px", paddingTop: "10px" }}
                src={this.state.mileageIcon}
                alt=""
              />
              <img
                style={{ width: "60px", paddingTop: "20px" }}
                src={this.state.cityIcon}
                alt=""
              />
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="mileage">
                  <b>Mileage</b>
                </label>
                <input
                  name="mileage"
                  onChange={this.handleChange}
                  value={mileage}
                  id="mileage"
                  type="text"
                  className="form-control"
                />
                {this.state.errors.mileage && (
                  <div className="alert alert-danger">
                    {this.state.errors.mileage}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="registrationCity">
                  <b>Registation City</b>
                </label>
                <input
                  name="registrationCity"
                  onChange={this.handleChange}
                  value={registrationCity}
                  id="registrationCity"
                  type="text"
                  className="form-control"
                />
                {this.state.errors.registrationCity && (
                  <div className="alert alert-danger">
                    {this.state.errors.registrationCity}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="btn btn-success" style={{ marginLeft: "660px" }}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default PriceData;
