import React from "react";
import "./style/RegisterForm.scss";

function RegisterForm() {
  return (
    <form>
      <div className="register-box">
        <div className="text">Register</div>
        <div className="space"></div>
        <input
          className="register-inputs name"
          placeholder="Name"
          type="text"
        ></input>
        <input
          className="register-inputs password"
          placeholder="Password"
          type="password"
        ></input>
        <input
          className="register-inputs surname"
          placeholder="Surname"
          type="text"
        ></input>
        <input
          className="register-inputs cpassword"
          placeholder="Confirm password"
          type="password"
        ></input>
        <input
          className="register-inputs email"
          placeholder="Email"
          type="email"
        ></input>
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
          <p className="info">* Your data will be saved on a secured server</p>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
