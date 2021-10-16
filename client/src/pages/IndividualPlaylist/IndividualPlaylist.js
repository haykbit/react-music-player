import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPlaylistById } from "../../api/api";
import Navbar from "../../components/Navbar/Navbar";
import Playlist from "../../components/Playlist";
import "./style/playlist.scss";

function IndividualPlaylist(props) {
  const { loading, authObserverSuccess } = useSelector((state) => state.auth);

  const [playlistId, setPlaylistId] = useState("");
  const [playlistInfo, setPlaylistInfo] = useState(null);

  useEffect(() => {
    if (!loading && authObserverSuccess && !props.location.state) {
      console.log("ENTRÓ");
      getUrlId();
    }
  }, [loading]);

  useEffect(() => {
    console.log(playlistId);
    if (!loading && authObserverSuccess && !props.location.state) {
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
      {props.location.state ? (
        <Playlist playlist={props.location.state.item} />
      ) : (
        ""
      )}

      {playlistInfo && !props.location.state ? (
        <Playlist playlist={playlistInfo} />
      ) : (
        ""
      )}
    </>
  );
}

export default IndividualPlaylist;
