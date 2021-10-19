import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPlaylistById } from "../../api/api";
import Navbar from "../../components/Navbar/Navbar";
import Playlist from "../../components/Playlist";
import "./style/playlist.scss";

function IndividualPlaylist() {
  const { loading, authObserverSuccess } = useSelector((state) => state.auth);

  const [playlistId, setPlaylistId] = useState("");
  const [playlistInfo, setPlaylistInfo] = useState(null);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUrlId();
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getPlaylistInfo(playlistId);
    }
  }, [playlistId]);

  function getUrlId() {
    const path = window.location.pathname.toString();
    setPlaylistId(path.slice(10));
  }

  async function getPlaylistInfo(playlistId) {
    if (playlistId) {
      const user = await getPlaylistById(playlistId);
      setPlaylistInfo(user.data.data);
    }
  }

  return (
    <>
      <Navbar />

      {playlistInfo ? <Playlist playlist={playlistInfo} /> : ""}
    </>
  );
}

export default IndividualPlaylist;
