import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";
import mileagepic from "../images/mileage.png";
import city from "../images/registrationCityIcon.png";

class PriceData extends Form {
  state = {
    mileageIcon: mileagepic,
    cityIcon: city,
    data: {
      registrationCity: "",
      mileage: "",
    },
    errors: {},
  };

  schema = {
    mileage: Joi.string().required().label("Mileage"),
    registrationCity: Joi.string().required().label("Registration City"),
  };

  doSubmit = () => {
    //call the server
    this.props.history.push("./results");
  };

  render() {
    const { data, errors } = this.state;
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
              <Input
                name="mileage"
                label="Mileage"
                onChange={this.handleChange}
                value={data.mileage}
                id="mileage"
                error={errors.mileage}
              />

              <Input
                name="registrationCity"
                label="Registration City"
                onChange={this.handleChange}
                value={data.registrationCity}
                id="registrationCity"
                error={errors.registrationCity}
              />
            </div>
          </div>
          <div style={{ marginLeft: "660px" }}>
            {this.renderButton("Submit")}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default PriceData;
