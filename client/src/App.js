import { Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AudioPlayer from "../src/components/SongBar/AudioPlayer";

import { authObserverLoading } from "./redux/auth/action";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Playlists from "./pages/Playlists";
import IndividualPlaylist from "./pages/IndividualPlaylist";

function App() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const { loading, authObserverSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authObserverLoading());
    if (!loading && !authObserverSuccess && !userStorage) {
      history.push("/login");
    } else if (location.pathname === "/") {
      history.push("/home-page");
    }
  }, []);

  return (
    <>
      <Switch>
        <Route path="/home-page" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/playlist" exact component={IndividualPlaylist} />
        <Route path="/playlists" exact component={Playlists} />
        {/* <Route path="/favorite" exact component={Favorite} /> */}
      </Switch>
      <AudioPlayer />
    </>
  );
}

export default App;
