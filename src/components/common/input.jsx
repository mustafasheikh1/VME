import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group ">
      <label htmlFor={name} style={{ fontSize: "17px" }}>
        <b>{label}</b>
      </label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && (
        <div className="alert alert-danger" style={{ fontSize: "15px" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
