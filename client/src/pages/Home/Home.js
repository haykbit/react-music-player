import React from "react";
import PlaylistCarrusel from "../../components/PlaylistCarrusel";
import Navbar from "../../components/Navbar/Navbar";
import "./style/home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <PlaylistCarrusel />
      <PlaylistCarrusel />
      <PlaylistCarrusel />
      <PlaylistCarrusel />
      <PlaylistCarrusel />
    </>
  );
}

export default Home;
