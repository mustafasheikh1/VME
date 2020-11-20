import React from "react";

const TutorialCard = ({ Image, Label, Detail }) => {
  return (
    <div className="card">
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
        <h5 className="card-title">{Label}</h5>
        <p className="card-text " style={{ alignContent: "center" }}>
          {Detail}
        </p>
      </div>
    </div>
  );
};

export default TutorialCard;
