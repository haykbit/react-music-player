import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/action";
import google from "../../assets/images/search.png";
import gmail from "../../assets/images/gmail.png";
import "./style/loginform.scss";

// import { signInWithGoogle } from "../../services/auth";
function LoginForm() {
  const dispatch = useDispatch();

  const handleChange = () => {};
  const handleLogin = async () => {
    dispatch(login());
    // console.log("clicked");
    // try {
    //   await signInWithGoogle();
    // } catch (error) {
    //   console.log(error);
    // }

    // console.log("clicked2");
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <form className="login-form">
          <h2>Login</h2>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button className="login-btn">Login</button>
        </form>
        <h3>Or</h3>
        <button className="login-gl-btn" onClick={handleLogin}>
          <img src={google} alt="" />
          Login with Google
        </button>
        <button className="register-btn">
          <img src={gmail} alt="" />
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
