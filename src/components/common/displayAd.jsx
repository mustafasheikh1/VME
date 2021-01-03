import React from "react";

const DisplayAd = (props) => {
  const { data } = props.location.state.data;

  const { name, price, details, img, date, time } = data;
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-sm-9 offset-sm-1" style={{ paddingTop: "10px" }}>
          <div class="card mb-3">
            <img class="card-img-top" src={img} alt="" />
          </div>
        </div>
        <div style={{ paddingLeft: "100px" }}>
          <b>Name: {name}</b> <br />
          <b>Price: {price}</b> <br />
          <b>Posted Date: {date}</b> <br />
          <b>Posted Time: {time}</b> <br />
          <b>Details: {details}</b> <br />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayAd;
