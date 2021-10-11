import React from "react";
import PlaylistCarrusel from "../../components/PlaylistCarrusel";
import GeneralList from "../../components/GeneralList/GeneralList";
import Navbar from "../../components/Navbar/Navbar";
import AlbumExplorer from "../../components/AlbumExplorer";
// import SongBar from "../../components/SongBar";

import "./style/home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <PlaylistCarrusel />
      <GeneralList />
      <AlbumExplorer />
      {/* <SongBar /> */}
    </>
  );
}

export default Home;
