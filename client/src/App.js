import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Playlists from "./pages/Playlists";

function App() {
  const history = useHistory();
  const { loading, accessToken } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/login");
    }
  }, [loading, accessToken, history]);

  return (
    <>
      <Switch>
        <Route path="/home-page" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/playlist" exact component={Playlists} />
      </Switch>
    </>
  );
}

export default App;
