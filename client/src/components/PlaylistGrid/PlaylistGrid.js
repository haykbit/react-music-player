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
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { myPlaylists, playlistCreatedSuccess } = useSelector(
    (state) => state.playlist
  );

  const [items, setItems] = useState(myPlaylists);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      dispatch(getMyPlaylists(user.uid));
    }
  }, [loading, authObserverSuccess, playlistCreatedSuccess]);

  useEffect(() => {
    setItems(myPlaylists);
  }, [loading]);

  const toggle = () => setModal(!modal);

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
                onClick={() =>
                  history.push({
                    pathname: `playlist/${item._id}`,
                    state: { item },
                  })
                }
                className="playlist-item"
                key={index}
                style={{
                  backgroundImage: `url(${item.playlistImage})`,
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
                <h1 style={{ fontSize: "40px" }}>{item.title}</h1>
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
