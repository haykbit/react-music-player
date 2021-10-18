import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { orderFavoriteSongs } from "../../../redux/song/action";
import { getLikedSongs } from "../../../api/api";
import IndividualSong from "../../IndividualSong";

import "./style/playliststack.scss";

function FavPlaylistStack() {
  const dispatch = useDispatch();
  const [favSongsData, setFavSongsData] = useState(null);
  const [orderInterval, setOrderInterval] = useState(null);
  const [orderChange, setOrderChange] = useState(false);
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { cancelLikedSuccess } = useSelector((state) => state.song);

  async function loadPlaylistOnMount() {
    const favoritedPlaylist = await getLikedSongs(user.uid);
    console.log(favoritedPlaylist, "FAVORITED PLAYLIST");
    setFavSongsData(favoritedPlaylist.data.data);
  }

  function setOrderedList() {
    const orderedList = favSongsData.map((song) => song._id);
    dispatch(orderFavoriteSongs(user.uid, orderedList));
  }

  //condition for controll type of playlist

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(favSongsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setOrderChange(!orderChange);
    setFavSongsData(items);
  }

  useEffect(() => {
    if (favSongsData) {
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
      loadPlaylistOnMount();
    }
  }, [loading, cancelLikedSuccess]);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      loadPlaylistOnMount();
    }
  }, []);

  return (
    <>
      <div className="DragDropList">
        <header className="DragDropList-header">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {favSongsData ? (
                    <>
                      {favSongsData.map((song, index) => {
                        return (
                          <Draggable
                            key={song._id}
                            draggableId={song._id}
                            index={index}
                          >
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="song-container">
                                  <div className="song-list-playlist">
                                    <IndividualSong
                                      song={song}
                                      key={song._id}
                                      playlist={favSongsData}
                                      index={index}
                                      favorite={true}
                                    />
                                  </div>
                                </div>
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                    </>
                  ) : (
                    <p>No songs found</p>
                  )}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </header>
      </div>
    </>
  );
}

export default FavPlaylistStack;
