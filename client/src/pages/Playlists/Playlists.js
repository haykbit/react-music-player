import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Myplaylist from "../../components/MyPlaylist";
import SongBar from "../../components/SongBar";
import "./style/playlist.scss";

function Playlists() {
  return (
    <>
      <Navbar />
      <Myplaylist />
      <SongBar />
    </>
  );
}

export default Playlists;
