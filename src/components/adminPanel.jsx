import React from "react";
import SideBar from "./sideBar";

const AdminPanel = () => {
  return (
    <div>
      <SideBar />
      <div className="content"></div>
    </div>
  );
};

export default AdminPanel;
