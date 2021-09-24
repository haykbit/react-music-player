import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const history = useHistory();
  const { loading, accessToken } = useSelector((state) => state);
  // useEffect(() => {
  //   if (!loading && !accessToken) {
  //     history.push("/register");
  //     history.push("/login");
  //   }
  // }, [loading, accessToken, history]);

  return (
    <>
      <Switch>
        <Route path="/home-page" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </>
  );
}

export default App;
