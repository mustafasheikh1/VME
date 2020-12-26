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
    color: Joi.string().required().label("Color"),
    licencePlate: Joi.string().required().label("Licence Plate"),
  };

  componentDidMount() {
    const data = {
      make: "Honda",
      model: "Accord",
      color: "Black",
      licencePlate: "LZX-9171",
    };
    this.setState({ data });
  }

  doSubmit = () => {
    //call the server
    this.props.history.push("./priceData");
  };

  render() {
    const { data, sideIcon, errors } = this.state;

    return (
      <React.Fragment>
        <p style={{ paddingTop: "20px", paddingLeft: "50px" }}>
          <b>Note: </b>
          Please confirm whether these results are correct or not.
        </p>
        <div
          className="results"
          style={{ paddingLeft: "200px", paddingTop: "50px" }}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-6" style={{ borderRight: "solid" }}>
                <Input
                  name="make"
                  onChange={this.handleChange}
                  value={data.make}
                  id="make"
                  label="Make"
                  error={errors.make}
                />
                <Input
                  name="model"
                  onChange={this.handleChange}
                  value={data.model}
                  id="model"
                  label="Model"
                  error={errors.model}
                />
                <Input
                  name="color"
                  onChange={this.handleChange}
                  value={data.color}
                  id="color"
                  label="Color"
                  error={errors.color}
                />
                <Input
                  name="licencePlate"
                  onChange={this.handleChange}
                  value={data.licencePlate}
                  id="licencePlate"
                  label="LicensePlate"
                  error={errors.licencePlate}
                />
                <div className="row">
                  <div className="col-sm-2" style={{ paddingTop: "10px" }}>
                    {this.renderButton("Confirm")}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  style={{
                    width: "400px",
                    paddingTop: "80px",
                    paddingLeft: "50px",
                  }}
                  src={sideIcon}
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
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ResultForm;
