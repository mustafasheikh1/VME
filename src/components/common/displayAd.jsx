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
      <div
        className="col-sm-10"
        style={{ paddingTop: "20px", paddingLeft: "90px" }}
      >
        <div className="card mb-3">
          <img className="card-img-top" src={img} alt="" />
        </div>
      </div>

      <div className="row" style={{ paddingLeft: "90px" }}>
        <div className="col-sm-1">
          <img style={{ width: "100px" }} src={makeIcon} alt="" />
          <h4 style={{ marginLeft: "20px" }}>Brand</h4>
        </div>
        <div
          className="col-sm-2"
          style={{ paddingLeft: "50px", paddingTop: "30px" }}
        >
          <h4>
            <b>{name}</b>
          </h4>
        </div>
        <div className="col-sm-2" style={{ paddingLeft: "90px" }}>
          <img style={{ width: "100px" }} src={modelIcon} alt="" />
          <h4 style={{ marginLeft: "30px" }}>Model</h4>
        </div>
        <div
          className="col-sm-2"
          style={{ paddingLeft: "30px", paddingTop: "30px" }}
        >
          <h4>
            <b>{model}</b>
          </h4>
        </div>
        <div className="col-sm-1">
          <img style={{ width: "100px" }} src={priceIcon} alt="" />
          <h4 style={{ marginLeft: "20px" }}>Price</h4>
        </div>
        <div
          className="col-sm-2"
          style={{ paddingLeft: "30px", paddingTop: "30px" }}
        >
          <h4>
            <b>{price}</b>
          </h4>
        </div>
      </div>
      <div className="row" style={{ paddingLeft: "100px" }}>
        <div className="col-sm-2" style={{ paddingLeft: "70px" }}>
          <img style={{ width: "100px" }} src={colorIcon} alt="" />
          <h4 style={{ marginLeft: "20px" }}>Color</h4>
        </div>
        <div
          className="col-sm-2"
          style={{ paddingLeft: "30px", paddingTop: "30px" }}
        >
          <h4>
            <b>{color}</b>
          </h4>
        </div>
        <div className="col-sm-3" style={{ paddingLeft: "100px" }}>
          <img style={{ width: "100px" }} src={licencePlateIcon} alt="" />
          <h4>Licence Plate</h4>
        </div>
        <div className="col-sm-3" style={{ paddingTop: "30px" }}>
          <h4>
            <b>{licensePlate}</b>
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayAd;
