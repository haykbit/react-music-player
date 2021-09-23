import React from "react";
import PlaylistCarrusel from "../../components/PlaylistCarrusel";
import PlaylistNew from "../../components/PlaylistNew/PlaylistNew";
import Navbar from "../../components/Navbar/Navbar";
import AlbumExplorer from "../../components/AlbumExplorer";

import "./style/home.scss";

function Profile() {
  return (
    <>
      <Navbar />
      <PlaylistCarrusel />
      <PlaylistNew />
      <AlbumExplorer />
    </>
  );
}

export default Profile;
