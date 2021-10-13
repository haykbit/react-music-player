import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PlaylistUser from "../../components/PlaylistUser";

function PlaylistUserInfo(props) {
  const playlistUserData = props.location.state.userInfo;
  return (
    <>
      <Navbar />
      <PlaylistUser playlistUserData={playlistUserData} />
    </>
  );
}

export default PlaylistUserInfo;
