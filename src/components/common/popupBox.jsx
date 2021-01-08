import React from "react";

const PopupBox = ({ onCancel, onDelete, data, label }) => {
  console.log(data);
  return (
    <div
      className="popup_box"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-30%, -50%)",
        borderRadius: "5px",
        background: "white",
        textAlign: "center",
        alignItems: "center",
        padding: "15px",
        border: "1px solid #b3b3b3",
        boxShadow: "0px 5px 10px rgba(0,0,0,.2)",
        zIndex: "9999",
        display: "block",
      }}
    >
      <i
        className="fa fa-exclamation"
        style={{
          fontSize: "60px",
          color: "#ff1925",
          border: "5px solid #ff1925",
          padding: "10px 30px",
          borderRadius: "50%",
          margin: "-10px 0 20px 0",
        }}
      ></i>
      <h1 style={{ fontSize: "25px", color: "#1b2631", marginBottom: "5px" }}>
        Your {label} will be deleted Permanently!
      </h1>
      <label style={{ fontSize: "20px", color: "#404040" }}>
        Are you sure to proceed?
      </label>
      <div className="btns">
        <button
          href="#"
          className="btn1"
          style={{
            background: "#999999",
            color: "white",
            fontSize: "18px",
            borderRadius: "5px",
            border: "1px solid #808080",
            paddingTop: "6px",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingBottom: "6px",
          }}
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="btn btn-danger"
          style={{
            marginLeft: "20px",
            background: "#ff3333",
            border: "1px solid #cc0000",
            fontSize: "18px",
            paddingTop: "6px",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingBottom: "6px",
          }}
          onClick={() => onDelete(data)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PopupBox;
