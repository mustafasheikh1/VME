import React from "react";
const DashboardCards = ({ name, value }) => {
  return (
    <div className="card-single">
      <div className="card-body">
        <span className="ti-briefcase"></span>
        <div>
          <h4>{name}</h4>
          <h5>{value}</h5>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
