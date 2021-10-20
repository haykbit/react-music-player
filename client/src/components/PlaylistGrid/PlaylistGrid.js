import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { orderMyPlaylists } from "../../redux/playlist/action";

import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";

import CreatePlaylistModal from "../CreatePlaylistModal";

import IconPlayList from "../../assets/images/icons/wishlist.png";
import "./style/playlistgrid.scss";

function PlaylistGrid({ playlists, privateLists }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );

  const [items, setItems] = useState([{}]);
  const [userInfo, setUserInfo] = useState([{}]);
  const [orderInterval, setOrderInterval] = useState(null);
  const [orderChange, setOrderChange] = useState(false);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (items) {
      if (orderInterval) {
        clearTimeout(orderInterval);
        setOrderInterval(setTimeout(setOrderedList, 3000));
      } else {
        setOrderInterval(setTimeout(setOrderedList, 3000));
      }
    }
  }, [orderChange]);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      setUserInfo(user);
      setItems(playlists);
    }
  }, [playlists]);

  function setOrderedList() {
    const orderedList = items.map((song) => song._id);
    dispatch(orderMyPlaylists(userInfo.uid, orderedList));
  }

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setItems((playlists) => arrayMove(playlists, oldIndex, newIndex));

    setOrderChange(!orderChange);
  };

  return (
    <>
      <div className="playlists-container">
        <div className="playlists-header">
          <header>
            <img src={IconPlayList} alt="" className="playlist-icon" />
          </header>
          {!privateLists ? (
            <>
              <h1>Playlists</h1>
            </>
          ) : (
            <>
              <h1>My Playlists</h1>
              <BsFillPlusCircleFill
                size={32}
                className="plus-icon"
                onClick={() => toggle()}
              />
              <CreatePlaylistModal show={modal} close={toggle} />
            </>
          )}
        </div>

        {privateLists ? (
          <div className="playlists">
            <SortableList
              onSortEnd={onSortEnd}
              className="list"
              draggedItemClassName="dragged"
            >
              {items.map((item, index) => (
                <SortableItem key={index}>
                  <div
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
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      history.push({
                        pathname: `playlist/${item._id}`,
                        state: { item },
                      })
                    }
                  >
                    <h1 style={{ fontSize: "40px" }}>{item.title}</h1>
                    <h5>{item.description}</h5>
                    <h5>Songs: {item.songs ? item.songs.length : "0"}</h5>
                  </div>
                </SortableItem>
              ))}
            </SortableList>
          </div>
        ) : (
          <div className="playlists">
            {items.map((item, index) => (
              <div
                className="playlist-item"
                key={index}
                style={{
                  backgroundImage: `url(${item.playlistImage})`,
                }}
                onClick={() =>
                  history.push({
                    pathname: `playlist/${item._id}`,
                    state: { item },
                  })
                }
              >
                <h1 style={{ fontSize: "40px" }}>{item.title}</h1>
                <h5>{item.description}</h5>
                <h5>Songs: {item.songs ? item.songs.length : "0"}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default PlaylistGrid;
