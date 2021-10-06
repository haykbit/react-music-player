import React from "react";
import PlaylistCarrusel from "../../components/PlaylistCarrusel";
import PlaylistNew from "../../components/PlaylistNew/PlaylistNew";
import Navbar from "../../components/Navbar/Navbar";
import AlbumExplorer from "../../components/AlbumExplorer";
import SongBar from "../../components/SongBar";

import "./style/home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <PlaylistCarrusel />
      <PlaylistNew />
      <AlbumExplorer />
      <SongBar />
    </>
  );
}

export default Home;
