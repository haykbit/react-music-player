import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { bestSongsByGenre } from "../../api/stats-api";
import { orderedTopLists } from "../../api/api";

import Modal from "../Modal";
import UploadedPlaylistStack from "./UploadedPlaylistStack";

import { FiUploadCloud } from "react-icons/fi";

import portadaUno from "../../assets/images/icons/portada-1.png";

function UploadedSongsPlaylist({ userInfo }) {
  const [modal, setModal] = useState(false);
  const [genreSongs, setGenreSongs] = useState(null);
  const Toggle = () => setModal(!modal);

  const { loading, authObserverSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getBestSongs();
    }
  }, [loading]);

  async function getBestSongs() {
    const top = await bestSongsByGenre("Ska");
    const cleanedList = top.data.data.map((song) => song.original_id);
    const songsByGenre = await orderedTopLists(cleanedList);
    setGenreSongs(songsByGenre.data.data);
  }

  return (
    <>
      <div className="my-playlist-body">
        <div className="left-side">
          <div className="playlist-title">
            <div
              className="album-column"
              style={{
                backgroundImage: `url(${portadaUno})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="text-column">
              <h1 className="playlist-name">My Uploaded Songs</h1>
              <h3 className="playlist-genre">
                {userInfo.firstName} {userInfo.lastName}
              </h3>
              <p className="song-number">
                {userInfo.mySongs ? userInfo.mySongs.length : "0"} songs
              </p>
              <button onClick={() => Toggle()} className="upload-button">
                <FiUploadCloud className="upload-icon" />
                Upload
              </button>
              {modal && (
                <Modal show={modal} close={Toggle} userInfo={userInfo} />
              )}
            </div>
          </div>
          <div className="song-stack">
            <UploadedPlaylistStack />
          </div>
        </div>
        <div className="right-side">
          {genreSongs ? (
            <>
              <div className="relevant-title">Top 3 Ska songs</div>
              {genreSongs.map((song) => {
                return (
                  <>
                    <div className="relevant-songs" key={song._id}>
                      <div
                        className="album-image"
                        style={{
                          backgroundImage: `url(${song.songImage})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                      <div className="relevant-song-name">
                        {" "}
                        {song.title}
                        <div className="relevant-song-artist">
                          {song.artist}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default UploadedSongsPlaylist;
