import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "../../components/LoginForm";
import "./styles/login.scss";
function Login() {
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const access = useSelector((state) => state.auth.authObserverSuccess);
  const history = useHistory();

  useEffect(() => {
    if (access && userStorage) {
      history.push("/home-page");
    }
  }, [access, userStorage, history]);

  return (
    <div className="loginBackground">
      <LoginForm />
    </div>
  );
}

export default Login;
