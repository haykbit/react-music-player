import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Myplaylist from "../../components/MyPlaylist/Myplaylist";
import "./style/playlist.scss";

function Playlists() {
  return (
    <>
      <Navbar />
      <Myplaylist />
    </>
  );
}

export default Playlists;
