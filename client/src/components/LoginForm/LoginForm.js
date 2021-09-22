import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, loginWithEmailAndPassword } from "../../redux/auth/action";
import google from "../../assets/images/search.png";
import gmail from "../../assets/images/gmail.png";
import "./style/loginform.scss";

function LoginForm() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const { email, password } = loginForm;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };
  const handleLoginWithGoogle = async () => {
    dispatch(login());
  };

  const handleLoginWithEmailAndPassword = (event) => {
    event.preventDefault();
    dispatch(loginWithEmailAndPassword(email, password));
  };

  return (
    <div className="login-container" onSubmit={handleLoginWithEmailAndPassword}>
      <div className="login-section">
        <form className="login-form">
          <h2>Login</h2>
          <input
            placeholder="Email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChange}
          />
          <button className="login-btn">Login</button>
        </form>
        <button className="login-gl-btn" onClick={handleLoginWithGoogle}>
          <img src={google} alt="" />
          Login with Google
        </button>
        <h3>Or</h3>
        <button className="register-btn">
          <img src={gmail} alt="" />
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
