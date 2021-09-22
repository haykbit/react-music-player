import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerWithEmailAndPassword } from "../../redux/auth/action";
import "./style/RegisterForm.scss";

function RegisterForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerWithEmailAndPassword(email, password));
  };
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <form className="register-box" onSubmit={handleSubmit}>
      <div>Register</div>
      <div></div>
      <div>Name</div>
      <div>
        Password
        <input value={password} onChange={handleChange} name="password" />
      </div>
      <div>Surname</div>
      <div>Confirm Password</div>
      <div>
        Email
        <input value={email} name="email" onChange={handleChange} />
      </div>
      <div></div>
      <div>
        <button>Register Button</button>
      </div>
    </form>
  );
}

export default RegisterForm;
