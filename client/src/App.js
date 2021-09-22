import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const history = useHistory();
  const { loading, accessToken } = useSelector((state) => state);
  // useEffect(() => {
  //   if (!loading && !accessToken) {
  //     history.push("/register");
  //   }
  // }, [loading, accessToken, history]);

  return (
    <>
      <Switch>
        <Route path="/home-page" exact component={Navbar} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
}

export default App;
