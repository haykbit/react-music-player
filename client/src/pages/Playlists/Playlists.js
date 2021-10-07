import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import MyPlaylistUpload from "../../components/MyPlaylistUpload/MyPlaylistUpload";
import "./style/playlist.scss";

function Playlists() {
  return (
    <>
      <Navbar />
      <MyPlaylistUpload />
    </>
  );
}

export default Playlists;
