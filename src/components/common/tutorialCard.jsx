import React from "react";

const TutorialCard = ({ Image, Label, Detail }) => {
  return (
    <div
      className="card text-center"
      style={{ width: "15rem", minHeight: "16rem", maxHeight: "16rem" }}
    >
      <img
        src={Image}
        alt=""
        style={{
          height: "7rem",
          width: "7rem",
          marginLeft: "65px",
        }}
      />
      <div className="card-body" style={{ width: "15rem" }}>
        <h5 className="card-title">{Label}</h5>
        <p className="card-text ">{Detail}</p>
      </div>
    </div>
  );
};

export default TutorialCard;
