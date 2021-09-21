import React from "react";
import PlaylistCarrusel from "../../components/PlaylistCarrusel";
import PlaylistNew from "../../components/PlaylistNew/PlaylistNew";
import Navbar from "../../components/Navbar/Navbar";
import "./style/home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <PlaylistCarrusel />
      <PlaylistNew />
    </>
  );
}

export default Home;
