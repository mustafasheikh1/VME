import React from "react";
import { Link } from "react-router-dom";

const AdCard = ({ data, onDelete, editProperty, caution }) => {
  const { img, name, price, details } = data;

  return (
    <React.Fragment>
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
          <p className="card-text" style={{ fontSize: "15px" }}>
            {details}
          </p>
          <Link
            to={{
              pathname: "/displayAd",
              state: {
                data: { data },
              },
            }}
            className="btn btn-success"
          >
            Check Car
          </Link>
        </div>
      </div>
      {editProperty && (
        <button
          className="btn btn-danger btn-sm"
          style={{ marginLeft: "85px" }}
          onClick={() => onDelete(data)}
        >
          Delete
        </button>
      )}
    </React.Fragment>
  );
};

export default AdCard;
