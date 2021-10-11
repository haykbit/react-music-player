import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyPlaylists } from "../../redux/playlist/action";
import { CgPlayList } from "react-icons/cg";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";

import CreatePlaylistModal from "../CreatePlaylistModal";
import portadaUno from "../../assets/images/icons/portada-1.png";
import portadaDos from "../../assets/images/icons/portada-2.png";
import portadaTres from "../../assets/images/icons/portada-3.png";
import portadaCuatro from "../../assets/images/icons/portada-4.png";

import IconPlayList from "../../assets/images/icons/wishlist.png";
import "./style/playlistgrid.scss";

function PlaylistGrid() {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
  const [items, setItems] = React.useState(playlist);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setItems((array) => arrayMove(array, oldIndex, newIndex));
  };

  console.log(items);

  return (
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
        <SortableList
          onSortEnd={onSortEnd}
          className="list"
          draggedItemClassName="dragged"
        >
          {items.map((item, index) => (
            <SortableItem key={index}>
              <div
                onClick={() => history.push(item.link)}
                className="playlist-item"
                key={index}
                style={{
                  backgroundImage: `url(${item.cover})`,
                  width: "250px",
                  height: "300px",
                  padding: "10px",
                  color: "#fff",
                  whiteSpace: "normal",
                  borderRadius: "10px",
                  margin: "10px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                }}
              >
                <h1 style={{ fontSize: "40px" }}>{item.name}</h1>
                <h5>{item.songs}</h5>
              </div>
            </SortableItem>
          ))}
        </SortableList>
      </div>
    </div>
  );
}

export default PlaylistGrid;
