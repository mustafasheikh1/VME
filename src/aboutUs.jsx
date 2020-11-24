import React from "react";
import mercedes from "./mercedes.jpg";
const AboutUs = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-sm-3 offset-sm-5">
          <h1 style={{ paddingTop: "20px" }}>
            <strong>About Us</strong>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <p style={{ textAlign: "center", paddingTop: "10px" }}>
            We are a car metadata extracttion company. We provide api's that can
            be integrated with an existing system and we have also a seperate
            website on which a vehicle's metadata can be checked.
          </p>
        </div>
      </div>
      <div className="container">
        <img
          style={{ width: "900px", marginLeft: "80px", paddingTop: "10px" }}
          src={mercedes}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
