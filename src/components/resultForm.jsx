import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import image from "../images/sideimage2.png";

class ResultForm extends Form {
  state = {
    data: {
      make: "",
      model: "",
      color: "",
      estPrice: "",
      licencePlate: "",
    },
    sideIcon: image,
    errors: {},
  };

  schema = {
    make: Joi.string().required().label("Make"),
    model: Joi.string().required().label("Model"),
    color: Joi.string().required().label("Color"),
    estPrice: Joi.string().required().label("Price"),
    licencePlate: Joi.string().required().label("Licence Plate"),
  };

  componentDidMount() {
    const data = {
      make: "Honda",
      model: "Accord",
      color: "Black",
      estPrice: "20,000 $",
      licencePlate: "LZX-9171",
    };
    this.setState({ data });
  }

  doSubmit = () => {
    //call the server
    this.props.history.push("/priceData");
  };

  render() {
    const { sideIcon } = this.state;
    try {
      const sideIcon = this.props.location.state.img;
    } catch (error) {
      window.location = "/not-found";
    }
    return (
      <React.Fragment>
        <p style={{ paddingTop: "20px", paddingLeft: "50px" }}>
          <b>Note: </b>
          Please confirm whether these results are correct or not.
        </p>
        <div
          className="results"
          style={{ paddingLeft: "200px", paddingTop: "20px" }}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-6" style={{ borderRight: "solid" }}>
                {this.renderInput("make", "Make")}
                {this.renderInput("model", "Model")}
                {this.renderInput("color", "Color")}
                {this.renderInput("estPrice", "Price")}
                {this.renderInput("licencePlate", "Licence Plate")}

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
                    paddingTop: "95px",
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
