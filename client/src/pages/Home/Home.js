import React from "react";
import PlaylistCarrusel from "../../components/PlaylistCarrusel";
import PlaylistNew from "../../components/PlaylistNew/PlaylistNew";
import Navbar from "../../components/Navbar/Navbar";
import AlbumExplorer from "../../components/AlbumExplorer";
import Example from "../../components/Slide/example";

import "./style/home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <PlaylistCarrusel />
      <PlaylistNew />
      <AlbumExplorer />
      <Example />
    </>
  );
}

export default Home;
