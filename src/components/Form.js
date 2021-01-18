import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  return (
    <div className="container">
      <h1>Create account</h1>
      <form onSubmit={(event) => props.handleSubmit(event)} className="form">
        <div className="name">
          <span>Name</span>
          <input
            type="text"
            placeholder="Name"
            value={props.username}
            // onChange est déclenché à chaque modification de l'input
            onChange={(event) => {
              // console.log(event); // Retourne un objet qui a une key target
              // console.log(event.target); Retourne l'objet target
              props.setUsername(event.target.value); // Fait apparaître la value de ce qui a été saisie lors d'event
            }}
          />
        </div>

        <div className="email">
          <span>Email</span>
          <input
            type="email"
            placeholder="Email"
            value={props.email}
            onChange={(event) => {
              // console.log(event.target);
              props.setEmail(event.target.value);
            }}
          />
        </div>

        <div className="password">
          <span>Password</span>
          <input
            className={props.errorMessage && "error"}
            type={props.eyePass ? "password" : "password-text"}
            placeholder="Empty"
            value={props.password}
            onChange={(event) => {
              // console.log(event);
              props.setPassword(event.target.value);
            }}
          />
          <FontAwesomeIcon
            className="fa-eye"
            onClick={() => {
              props.setEyePass(!props.eyePass);
            }}
            icon={props.eyePass ? "eye" : "eye-slash"}
          />
        </div>

        <div className="passwordCheck">
          <span>Confirm your password</span>
          <input
            className={props.errorMessage && "error"}
            type={props.eyeConfirm ? "password" : "password-text"}
            placeholder="Empty"
            value={props.passwordCheck}
            onChange={(event) => {
              // console.log(event);
              props.setPasswordCheck(event.target.value);
            }}
          />
          <FontAwesomeIcon
            className="fa-eye"
            onClick={() => {
              props.setEyeConfirm(!props.eyeConfirm);
            }}
            icon={props.eyeConfirm ? "eye" : "eye-slash"}
          />
        </div>
        {props.errorMessage && (
          <p className="message">
            Les mots de passe ne sont pas identiques !!!
          </p>
        )}

        <div>
          <input
            type="submit"
            value="Register"
            onClick={props.handleSubmit}
            className="register"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
