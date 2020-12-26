import React from "react";

const Input = ({ name, label, errors, value, onChange }) => {
  return (
    <div className="form-group ">
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <input
        value={value}
        name={name}
        id={name}
        onChnage={onChange}
        className="form-control "
      />
      {errors.make && <div className="alert alert-danger">{errors.make}</div>}
    </div>
  );
};

export default Input;
