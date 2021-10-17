import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authObserverLoading } from "../../redux/auth/action";
import { getFavoritePlaylists } from "../../redux/playlist/action";
import Navbar from "../../components/Navbar/Navbar";
import PlaylistGrid from "../../components/PlaylistGrid/PlaylistGrid";
import "./style/myplaylist.scss";

function MyPlaylists() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const { myFavoritePlaylists, playlistCreatedSuccess } = useSelector(
    (state) => state.playlist
  );

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      dispatch(getFavoritePlaylists(user.uid));
    }
  }, [loading, authObserverSuccess, playlistCreatedSuccess]);

  /* useEffect(() => {
    dispatch(authObserverLoading());
    if (signOutSuccess) {
      history.push("/login");
    }
  }, []); */

  return (
    <>
      <Navbar />
      <PlaylistGrid playlists={myFavoritePlaylists} privateLists={true} />
    </>
  );
}

export default MyPlaylists;
