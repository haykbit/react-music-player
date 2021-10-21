import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authObserverLoading } from "../../redux/auth/action";
import { displayPublicPlaylists } from "../../redux/playlist/action";
import Navbar from "../../components/Navbar/Navbar";
import PlaylistGrid from "../../components/PlaylistGrid/PlaylistGrid";
import "./style/playlist.scss";

function Playlists() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const { publicPlaylists } = useSelector((state) => state.playlist);
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      dispatch(displayPublicPlaylists(user.uid));
    }
  }, [loading, authObserverSuccess]);
  useEffect(() => {
    dispatch(authObserverLoading());
    if (signOutSuccess) {
      history.push("/login");
    }
  }, []);
  return (
    <>
      <Navbar />
      <PlaylistGrid playlists={publicPlaylists} privateLists={false} />
    </>
  );
}

export default Playlists;
