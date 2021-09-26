import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import imagenUno from "../../assets/images/portada-1.png";
import { login, loginWithEmailAndPassword } from "../../redux/auth/action";
import google from "../../assets/images/search.png";
import gmail from "../../assets/images/gmail.png";
import "./style/loginform.scss";
import PasswordRecovery from "../PasswordRecovery/PasswordRecovery";

function LoginForm() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [recoverPass, setRecoverPass] = useState({ recover: false });
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

  const handleRecover = (event) => {
    setRecoverPass({ recover: true });
  };

  const recoverOff = () => {
    setRecoverPass({ recover: false });
  };

  return (
    <div className="login-container" onSubmit={handleLoginWithEmailAndPassword}>
      <div className="login-section">
        {recoverPass.recover ? (
          <PasswordRecovery recoverOff={recoverOff} />
        ) : (
          <>
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
            <div className="forgotPassword">
              Forgot your password? Click{" "}
              <span className="recover-link" onClick={handleRecover}>
                here
              </span>
            </div>

            <h3>Or</h3>
            <button className="login-gl-btn" onClick={handleLoginWithGoogle}>
              <img src={google} alt="" />
              Login with Google
            </button>
            <button className="register-btn">
              <img src={gmail} alt="" />
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
