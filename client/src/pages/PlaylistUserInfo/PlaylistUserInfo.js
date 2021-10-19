import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import PlaylistUser from "../../components/PlaylistUser";
import { getUserProfile } from "../../api/api";

function PlaylistUserInfo(props) {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  // let playlistUserData = "";

  const { loading, authObserverSuccess } = useSelector((state) => state.auth);
  const { followUserSuccess, cancelFollowingUserSuccess } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUrlId();
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUserInfo(userId);
    }
  }, [userId, followUserSuccess, cancelFollowingUserSuccess]);

  function getUrlId() {
    const path = window.location.pathname.toString();
    setUserId(path.slice(15));
  }

  async function getUserInfo(userId) {
    if (userId) {
      const user = await getUserProfile(userId);
      setUserInfo(user.data.data);
    }
  }

  // if (props.location.state) {
  //   playlistUserData = props.location.state.userInfo;
  // }

  return (
    <>
      <Navbar />
      {/* {playlistUserData ? (
        <PlaylistUser playlistUserData={playlistUserData} />
      ) : (
        ""
      )} */}
      {userInfo ? <PlaylistUser playlistUserData={userInfo} /> : ""}
    </>
  );
}

export default PlaylistUserInfo;
