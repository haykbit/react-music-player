import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authObserverLoading } from "../../redux/auth/action";
import Navbar from "../../components/Navbar/Navbar";
import FavSongsPlaylist from "../../components/FavSongsPlaylist";
import "./style/playlist.scss";

function FavSongs() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { signOutSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authObserverLoading());
    if (signOutSuccess) {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <FavSongsPlaylist />
    </>
  );
}

export default FavSongs;
