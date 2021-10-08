import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authObserverLoading } from "../../redux/auth/action";
import Navbar from "../../components/Navbar/Navbar";
import MyPlaylist from "../../components/MyPlaylist";
import SongBar from "../../components/SongBar";
import "./style/playlist.scss";

function Playlists() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const { loading, authObserverSuccess, signOutSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(authObserverLoading());
    if (signOutSuccess) {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <MyPlaylist />
      <SongBar />
    </>
  );
}

export default Playlists;
