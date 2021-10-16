import React, { useState, useEffect } from "react";
import PlaylistCarrusel from "../../components/PlaylistCarrusel";
import GeneralList from "../../components/GeneralList/GeneralList";
import Navbar from "../../components/Navbar/Navbar";
import AlbumExplorer from "../../components/AlbumExplorer";
// import SongBar from "../../components/SongBar";

import "./style/artist.scss";

function Artist() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Navbar />
    </>
  );
}

export default Artist;
