import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillCaretRightFill } from "react-icons/bs";

import { getNewSongs, getPopularSongs } from "../../api/stats-api";
import { orderedTopLists } from "../../api/api";
import PlaylistCarrusel from "../../components/PlaylistCarrusel";
import GeneralList from "../../components/GeneralList/GeneralList";
import Navbar from "../../components/Navbar/Navbar";

import "./style/home.scss";

function Home() {
  const { loading, authObserverSuccess } = useSelector((state) => state.auth);
  const [songs, setSongs] = useState(null);
  const [generalSongs, setGeneralSongs] = useState(null);

  async function getNewSongsData() {
    const newestList = await getNewSongs();
    const cleanedNewestList = newestList.data.data.map(
      (song) => song.original_id
    );
    const newestSongs = await orderedTopLists(cleanedNewestList);
    setSongs(newestSongs.data.data);
  }

  async function getPopularSongsData() {
    const popularSongs = await getPopularSongs();
    const cleanedPopularList = popularSongs.data.data.map(
      (song) => song.original_id
    );
    const mostPopularSongs = await orderedTopLists(cleanedPopularList);
    setGeneralSongs(mostPopularSongs.data.data);
  }

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getNewSongsData();
      getPopularSongsData();
    }
  }, [loading, authObserverSuccess]);
  return (
    <>
      <Navbar />
      <PlaylistCarrusel />
      <GeneralList playlist={songs} playlistGeneral={generalSongs} />
    </>
  );
}

export default Home;
