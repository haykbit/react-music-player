import React, { useState } from "react";

import Modal from "../Modal";
import PlaylistStack from "./PlaylistStack";
import PlaylistContextMenu from "./PlaylistContextMenu/PlaylistContextMenu";

import { IoMdMore } from "react-icons/io";

import portadaUno from "../../assets/images/icons/portada-1.png";
import portadaDos from "../../assets/images/albums/arctic-album-1.jpeg";
import portadaTres from "../../assets/images/albums/arctic-album-2.jpeg";
import portadaCuatro from "../../assets/images/albums/arctic-album-3.jpeg";

import "./style/playlistcomponent.scss";

function Playlist() {
  const [modal, setModal] = useState(false);
  const ToggleModal = () => setModal(!modal);

  const [contextMenu, setContextMenu] = useState(false);
  const ToggleContext = () => setContextMenu(!contextMenu);

  const [modals, setModals] = useState({
    editModal: false,
    deleteModal: false,
  });

  const ToggleEditModal = () => {
    setModals({ ...modals, editModal: !modals.editModal });
  };
  const ToggleDeleteModal = () =>
    setModals({ ...modals, deleteModal: !modals.deleteModal });

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
              <h1 className="playlist-name">{/* {title} */}Title</h1>
              <h3 className="playlist-genre">{/* {owner} */}Sebastian Elias</h3>
              <p className="song-number">140 songs</p>
              <button
                onClick={() => ToggleContext()}
                className="context-menu-btn"
              >
                <IoMdMore className="context-icon" />
              </button>
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

      <div className="context-container">
        <PlaylistContextMenu
          show={contextMenu}
          closeMenu={ToggleContext}
          ToggleEditModal={ToggleEditModal}
          ToggleDeleteModal={ToggleDeleteModal}
          playlist={playlist}
        />
      </div>
    </>
  );
}

export default Playlist;
