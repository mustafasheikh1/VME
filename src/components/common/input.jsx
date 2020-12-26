import React from "react";

const Input = ({ name, label, error, value, onChange }) => {
  return (
    <div className="form-group ">
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <input
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        className="form-control "
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
