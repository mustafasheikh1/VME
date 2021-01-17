import React from "react";
import makeIcon from "../../images/makeIcon2.png";
import modelIcon from "../../images/modelIcon2.png";
import priceIcon from "../../images/priceIcon.png";
import licencePlateIcon from "../../images/licenceplateIcon.png";
import colorIcon from "../../images/colorIcon.png";

const DisplayAd = (props) => {
  const { data } = props.location.state.data;
  console.log(data);
  const { name, price, img, model, color, licensePlate } = data;
  return (
    <React.Fragment>
      <div className="container" style={{ paddingTop: "60px" }}>
        <div className="row">
          <div className="col-sm-1" style={{ paddingTop: "10px" }}>
            <img style={{ width: "120px" }} src={makeIcon} alt="" />
            <h4 style={{ marginLeft: "30px" }}>Brand</h4>
          </div>
          <div
            className="col-sm-2"
            style={{ paddingLeft: "60px", paddingTop: "50px" }}
          >
            <h4>
              <b>{name}</b>
            </h4>
          </div>
          <div className="col-sm-1">
            <img style={{ width: "120px" }} src={modelIcon} alt="" />
            <h4 style={{ marginLeft: "30px" }}>Model</h4>
          </div>
          <div
            className="col-sm-2"
            style={{ paddingLeft: "60px", paddingTop: "40px" }}
          >
            <h4>
              <b>{model}</b>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1">
            <img style={{ width: "120px" }} src={colorIcon} alt="" />
            <h4 style={{ marginLeft: "30px" }}>Color</h4>
          </div>
          <div
            className="col-sm-2"
            style={{ paddingLeft: "60px", paddingTop: "40px" }}
          >
            <h4>
              <b>{color}</b>
            </h4>
          </div>
          <div className="col-sm-1">
            <img style={{ width: "120px" }} src={priceIcon} alt="" />
            <h4 style={{ marginLeft: "30px" }}>Price</h4>
          </div>
          <div
            className="col-sm-2"
            style={{ paddingLeft: "60px", paddingTop: "40px" }}
          >
            <h4>
              <b>{price}</b>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1">
            <img style={{ width: "120px" }} src={licencePlateIcon} alt="" />
            <h4>Licence Plate</h4>
          </div>
          <div
            className="col-sm-3"
            style={{ paddingLeft: "60px", paddingTop: "40px" }}
          >
            <h4>
              <b>{licensePlate}</b>
            </h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayAd;
