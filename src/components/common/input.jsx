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
<<<<<<< HEAD
        onChnage={onChange}
=======
        onChange={onChange}
>>>>>>> main
        className="form-control "
      />
      {errors.make && <div className="alert alert-danger">{errors.make}</div>}
    </div>
  );
};

export default Input;
