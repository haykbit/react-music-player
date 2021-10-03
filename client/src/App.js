import { Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authObserverLoading } from "./redux/auth/action";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Playlists from "./pages/Playlists";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const { loading, authObserverSuccess, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(authObserverLoading());
    if (!loading && !authObserverSuccess && !userStorage) {
      history.push("/login");
    }
  }, []);

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
