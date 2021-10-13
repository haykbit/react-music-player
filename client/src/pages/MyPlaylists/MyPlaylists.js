import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authObserverLoading } from "../../redux/auth/action";
import { getMyPlaylists } from "../../redux/playlist/action";
import Navbar from "../../components/Navbar/Navbar";
import PlaylistGrid from "../../components/PlaylistGrid/PlaylistGrid";
import "./style/myplaylist.scss";

function MyPlaylists() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const { user, loading, authObserverSuccess, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const { myPlaylists, playlistCreatedSuccess } = useSelector(
    (state) => state.playlist
  );
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      dispatch(getMyPlaylists(user.uid));
    }
  }, [loading, authObserverSuccess, playlistCreatedSuccess]);
  useEffect(() => {
    dispatch(authObserverLoading());
    if (signOutSuccess) {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <PlaylistGrid playlists={myPlaylists} privateLists={true} />
    </>
  );
}

export default MyPlaylists;
