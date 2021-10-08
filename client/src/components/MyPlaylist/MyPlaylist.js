import React, { useState } from "react";
import "./style/myPlaylist.scss";
import Modal from "../Modal";
import portadaUno from "../../assets/images/icons/portada-1.png";
import PlaylistStack from "../PlaylistStack/PlaylistStack";
import portadaDos from "../../assets/images/albums/arctic-album-1.jpeg";
import portadaTres from "../../assets/images/albums/arctic-album-2.jpeg";
import portadaCuatro from "../../assets/images/albums/arctic-album-3.jpeg";
import portadaCinco from "../../assets/images/albums/arctic-album-4.jpg";
import portadaSeis from "../../assets/images/albums/arctic-album-5.jpg";
import portadaOcho from "../../assets/images/albums/gorillaz-demon-days.png";
import portadaNueve from "../../assets/images/albums/linkin-p-papercut.jpeg";

function MyPlaylist() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
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
              <div className="playlist-name">My Uploaded Songs</div>
              <div className="playlist-genre">Sebastian Elias</div>
              <div className="song-number">140 songs</div>
              <button onClick={() => Toggle()} className="upload-button">
                Upload
              </button>
              <Modal show={modal} close={Toggle} />
            </div>
          </div>
          <div className="song-stack">
            <PlaylistStack />
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

export default MyPlaylist;
