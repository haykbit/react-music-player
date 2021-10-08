import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PlaylistGrid from "../../components/PlaylistGrid/PlaylistGrid";
import "./style/playlist.scss";

function Playlists() {
  return (
    <>
      <Navbar />
      <PlaylistGrid />
    </>
  );
}

export default Playlists;
