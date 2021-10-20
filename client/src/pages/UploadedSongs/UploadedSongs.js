import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authObserverLoading } from "../../redux/auth/action";
import { getUserProfile } from "../../api/api";
import Navbar from "../../components/Navbar/Navbar";
import UploadedSongsPlaylist from "../../components/UploadedSongsPlaylist";
import "./style/playlist.scss";

function UploadedSongs() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, authObserverSuccess, signOutSuccess, loading } = useSelector(
    (state) => state.auth
  );
  const { uploadSongSuccess } = useSelector((state) => state.song);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUserInfo();
    }
  }, [loading, authObserverSuccess, uploadSongSuccess]);

  useEffect(() => {
    dispatch(authObserverLoading());
    if (signOutSuccess) {
      history.push("/login");
    }
  }, []);

  async function getUserInfo() {
    const userData = await getUserProfile(user.uid);
    setUserInfo(userData.data.data);
  }
  return (
    <>
      <Navbar />
      <UploadedSongsPlaylist userInfo={userInfo} />
    </>
  );
}

export default UploadedSongs;
