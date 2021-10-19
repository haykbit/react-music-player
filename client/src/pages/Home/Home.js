import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillCaretRightFill } from "react-icons/bs";

import { getPublicSongs, getSongsFromPlaylist } from "../../api/api";
import PlaylistCarrusel from "../../components/PlaylistCarrusel";
import GeneralList from "../../components/GeneralList/GeneralList";
import Navbar from "../../components/Navbar/Navbar";
import AlbumExplorer from "../../components/AlbumExplorer";

import "./style/home.scss";

function Home() {
  const { loading, authObserverSuccess } = useSelector((state) => state.auth);
  const [songs, setSongs] = useState(null);
  const [generalSongs, setGeneralSongs] = useState(null);

  async function getSongsData() {
    const publicSongs = await getPublicSongs();
    setSongs(publicSongs["data"]["data"]);
  }

  async function getGeneralSongsData() {
    const songs = await getSongsFromPlaylist("61698eef6f4479521c3b4625");
    setGeneralSongs(songs.data.data);
  }

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getSongsData();
      getGeneralSongsData();
    }
  }, [loading, authObserverSuccess]);
  return (
    <>
      <Navbar />
      <PlaylistCarrusel />
      <GeneralList playlist={songs} playlistGeneral={generalSongs} />
      <AlbumExplorer />
    </>
  );
}

export default Home;
