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
import FavSongs from "./pages/FavSongs/FavSongs";
import UploadedSongs from "./pages/UploadedSongs/UploadedSongs";
import MyPlaylists from "./pages/MyPlaylists";
import PlaylistUserInfo from "./pages/PlaylistUserInfo";
import ArtistPage from "./pages/Artist";

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
        <Route path="/mysongs" exact component={UploadedSongs} />
        <Route path="/favorites" exact component={FavSongs} />
        <Route path="/playlist/:id" exact component={IndividualPlaylist} />
        <Route path="/my-playlists" exact component={MyPlaylists} />
        <Route path="/playlists" exact component={Playlists} />
        <Route path="/playlist-user/:id" exact component={PlaylistUserInfo} />
        <Route path="/artist" exact component={ArtistPage} />
      </Switch>
      {authObserverSuccess ? <AudioPlayer /> : null}
    </>
  );
}

export default App;
