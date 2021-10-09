import React, { useState } from "react";
import CreatePlaylistModal from "../CreatePlaylistModal";
import portadaUno from "../../assets/images/icons/portada-1.png";
import portadaDos from "../../assets/images/icons/portada-2.png";
import portadaTres from "../../assets/images/icons/portada-3.png";
import portadaCuatro from "../../assets/images/icons/portada-4.png";

import { CgPlayList } from "react-icons/cg";
import IconPlayList from "../../assets/images/icons/wishlist.png";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./style/playlistgrid.scss";

function PlaylistGrid() {
  const playlist = [
    { name: "My uploaded Songs", songs: 10, cover: portadaTres },
    { name: "Spanish Rock", songs: 43, cover: portadaUno },
    { name: "English Rock", songs: 22, cover: portadaDos },
    { name: "European Rap", songs: 15, cover: portadaTres },
    { name: "Spanish Trap", songs: 43, cover: portadaCuatro },
    { name: "English Country", songs: 22, cover: portadaUno },
    { name: "European Techno", songs: 15, cover: portadaDos },
    { name: "Spanish Pop", songs: 43, cover: portadaTres },
    { name: "English Rap", songs: 22, cover: portadaCuatro },
    { name: "European House", songs: 15, cover: portadaUno },
    { name: "English Rock", songs: 22, cover: portadaDos },
    { name: "European Rap", songs: 15, cover: portadaTres },
    { name: "Spanish Trap", songs: 43, cover: portadaCuatro },
  ];
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="playlists-container">
        <div className="playlists-header">
          <header>
            <img src={IconPlayList} alt="" className="playlist-icon" />
          </header>
          <h1>Playlists</h1>
          <BsFillPlusCircleFill
            size={32}
            className="plus-icon"
            onClick={() => toggle()}
          />
          <CreatePlaylistModal show={modal} close={toggle} />
        </div>
        <div className="playlists">
          {playlist.map((item, index) => {
            return (
              <div
                className="playlist-item"
                key={index}
                style={{ backgroundImage: `url(${item.cover})` }}
              >
                <h1>{item.name}</h1>
                <h5>{item.songs}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PlaylistGrid;
