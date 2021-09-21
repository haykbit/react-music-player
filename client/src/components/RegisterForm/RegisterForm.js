import React from "react";
import "./style/RegisterForm.scss";

function RegisterForm() {
  return (
    <form>
      <div className="register-box">
        <div className="text">
          <p>Register</p>
        </div>
        <div></div>
        <input className="register-inputs"></input>
        <input className="register-inputs"></input>
        <input className="register-inputs"></input>
        <input className="register-inputs"></input>
        <input className="register-inputs"></input>
        <div></div>
        <div>Register Button</div>
      </div>
    </form>
  );
}

export default RegisterForm;
