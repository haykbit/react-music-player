import React from "react";
import "./style/RegisterForm.scss";

function RegisterForm() {
  return (
    <form>
      <div className="register-box">
        <div className="text">Register</div>
        <div></div>
        <input className="register-inputs" placeholder="Name"></input>
        <input className="register-inputs" placeholder="Password"></input>
        <input className="register-inputs" placeholder="Surname"></input>
        <input
          className="register-inputs"
          placeholder="Confirm password"
        ></input>
        <input className="register-inputs" placeholder="Email"></input>
        <div className="checkboxes">
          <label>
            <input type="checkbox"></input>
            <span>I accept privacy polices</span>
          </label>
          <label>
            <input type="checkbox"></input>
            <span>Subscribe to our newsletter</span>
          </label>
        </div>
        <button className="register-inputs button">Register</button>
        <div>
          <p>* Your data will be saved on a secured server</p>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
