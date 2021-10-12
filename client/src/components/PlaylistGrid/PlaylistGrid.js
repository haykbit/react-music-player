import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyPlaylists } from "../../redux/playlist/action";
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
  const history = useHistory();
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { myPlaylists, playlistCreatedSuccess } = useSelector(
    (state) => state.playlist
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      dispatch(getMyPlaylists(user.uid));
    }
  }, [loading, authObserverSuccess, playlistCreatedSuccess]);
  const playlist = [
    {
      name: "My uploaded Songs",
      songs: 10,
      cover: portadaTres,
      link: "/playlist",
    },
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
          {myPlaylists.map((item, index) => {
            return (
              <div
                onClick={() => history.push(item.link)}
                className="playlist-item"
                key={index}
                style={{ backgroundImage: `url(${item.playlistImage})` }}
                onClick={() =>
                  history.push({
                    pathname: `playlist/${item._id}`,
                    state: { item },
                  })
                }
              >
                <h1>{item.title}</h1>
                <h4>{item.description}</h4>
                <h5>Songs: {item.songs.length}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PlaylistGrid;
