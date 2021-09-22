import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, loginWithEmailAndPassword } from "../../redux/auth/action";
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
    <div className="loginBox">
      <form className="loginForm" onSubmit={handleLoginWithEmailAndPassword}>
        <label>email</label>
        <input value={email} name="email" onChange={handleChange} />
        <label>password</label>
        <input value={password} name="password" onChange={handleChange} />
        <button>Login</button>
      </form>
      <button onClick={handleLoginWithGoogle}>Login with Google</button>
    </div>
  );
}

export default LoginForm;
