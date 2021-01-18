import React from "react";

const StepTwo = (props) => {
  return (
    <div className="container">
      <h1>Results</h1>
      <div className="result-container">
        <p> Name : {props.username}</p>
        <p>Email : {props.email}</p>
        <p>Password : {props.password}</p>
      </div>

      <button
        className="edit-button"
        onClick={() => {
          props.setStep(1);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
