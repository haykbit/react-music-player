import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "./services/auth";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const history = useHistory();
  const { loading } = useSelector((state) => state.auth);
  useEffect(() => {
    const user = onAuthStateChanged();
    if (!loading && !user) {
      history.push("/login");
    }
  }, [loading, history]);

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
