import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavoritePlaylists } from "../../redux/playlist/action";
import Navbar from "../../components/Navbar/Navbar";
import PlaylistGrid from "../../components/PlaylistGrid/PlaylistGrid";
import "./style/myplaylist.scss";

function MyPlaylists() {
  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess } = useSelector(
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

  return (
    <>
      <Navbar />
      <PlaylistGrid playlists={myFavoritePlaylists} privateLists={true} />
    </>
  );
}

export default MyPlaylists;
