import React from "react";
import { Link } from "react-router-dom";

const AdCard = ({ data }) => {
  const { img, name, price, details } = data;
  return (
    <div
      className="card text-center"
      style={{ width: "15rem", minHeight: "22rem", maxHeight: "22rem" }}
    >
      <img
        src={img}
        className="card-img-top"
        alt="..."
        style={{ minHeight: "8rem", maxHeight: "8rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {name} {price}
        </h5>
        <p className="card-text">{details}</p>
        <Link to="" className="btn btn-success">
          Check Car
        </Link>
      </div>
    </div>
  );
};

export default AdCard;
