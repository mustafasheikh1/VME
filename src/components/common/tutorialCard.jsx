import React from "react";

const TutorialCard = ({ Image, Label, Detail }) => {
  return (
    <div className="card text-center">
      <img
        src={Image}
        alt=""
        style={{
          height: "7rem",
          width: "7rem",
          marginLeft: "50px",
        }}
      />
      <div className="card-body" style={{ width: "15rem" }}>
        <h5 style={{ paddingLeft: "20px" }} className="card-title">
          {Label}
        </h5>
        <p className="card-text " style={{ paddingLeft: "20px" }}>
          {Detail}
        </p>
      </div>
    </div>
  );
};

export default TutorialCard;
