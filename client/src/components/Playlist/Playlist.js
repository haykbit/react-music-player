import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserProfile } from "../../api/api";
import Modal from "../Modal";
import PlaylistStack from "./PlaylistStack";

import { FiUploadCloud } from "react-icons/fi";

import portadaUno from "../../assets/images/icons/portada-1.png";
import portadaDos from "../../assets/images/albums/arctic-album-1.jpeg";
import portadaTres from "../../assets/images/albums/arctic-album-2.jpeg";
import portadaCuatro from "../../assets/images/albums/arctic-album-3.jpeg";

import "./style/playlistcomponent.scss";

function Playlist({ playlist }) {
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const Toggle = () => setModal(!modal);
  const { loading, authObserverSuccess } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUserInfo();
    }
  }, []);
  async function getUserInfo() {
    const user = await getUserProfile(playlist.owner);
    setUserInfo(user.data.data);
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
              <h1 className="playlist-name">{playlist.title}</h1>
              <h3 className="playlist-genre">
                {userInfo.firstName} {userInfo.lastName}
              </h3>
              <p className="playlist-genre">{playlist.description}</p>
              <p className="song-number">{playlist.songs.length} songs</p>
            </div>
          </div>
          <div className="song-stack">
            <PlaylistStack playlist={playlist} />
          </div>
        </div>
        <div className="right-side">
          <div className="relevant-title">Top 3 most relevant songs</div>
          <div className="relevant-songs">
            <div className="number">1</div>
            <div
              className="album-image"
              style={{
                backgroundImage: `url(${portadaTres})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relevant-song-name">
              {" "}
              Four Out Of Five
              <div className="relevant-song-artist">Arctic Monkeys</div>
            </div>
          </div>
          <div className="relevant-songs">
            <div className="number">2</div>
            <div
              className="album-image"
              style={{
                backgroundImage: `url(${portadaDos})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {" "}
            </div>
            <div className="relevant-song-name">
              {" "}
              Brainstorm - Live
              <div className="relevant-song-artist">Arctic Monkeys</div>
            </div>
          </div>
          <div className="relevant-songs">
            <div className="number">3</div>
            <div
              className="album-image"
              style={{
                backgroundImage: `url(${portadaCuatro})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relevant-song-name">
              {" "}
              She's Thunderstorms
              <div className="relevant-song-artist">Arctic Monkeys</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playlist;
