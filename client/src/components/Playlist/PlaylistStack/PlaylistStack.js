import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { getSongsFromPlaylist } from "../../../api/api";
import { orderMyPlaylistsSongs } from "../../../redux/song/action";
import IndividualSong from "../../IndividualSong";

import "./style/playliststack.scss";

function PlaylistStack({ playlist }) {
  const dispatch = useDispatch();
  const [mySongsData, setMySongsData] = useState(null);
  const [orderInterval, setOrderInterval] = useState(null);
  const [orderChange, setOrderChange] = useState(false);

  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { addSongToPlaylistSuccess, removeSongSuccess } = useSelector(
    (state) => state.playlist
  );

  async function loadPlaylistOnMount() {
    const songs = await getSongsFromPlaylist(playlist._id);
    setMySongsData(songs.data.data);
  }

  function setOrderedList() {
    const orderedList = mySongsData.map((song) => song._id);
    dispatch(orderMyPlaylistsSongs(playlist._id, orderedList));
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(mySongsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setOrderChange(!orderChange);
    setMySongsData(items);
  }

  useEffect(() => {
    if (mySongsData && user.uid === playlist.owner) {
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
  }, [loading, addSongToPlaylistSuccess, removeSongSuccess]);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      loadPlaylistOnMount();
    }
  }, []);

  return (
    <>
      <div className="DragDropList">
        {mySongsData ? (
          <>
            {user.uid === playlist.owner ? (
              <>
                <header className="DragDropList-header">
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                      {(provided) => (
                        <ul
                          className="characters"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {mySongsData.map((song, index) => {
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
                                          playlist={mySongsData}
                                          index={index}
                                          favorite={false}
                                          playlistData={playlist}
                                        />
                                      </div>
                                    </div>
                                  </li>
                                )}
                              </Draggable>
                            );
                          })}

                          {provided.placeholder}
                        </ul>
                      )}
                    </Droppable>
                  </DragDropContext>
                </header>
              </>
            ) : (
              <ul className="characters">
                {mySongsData.map((song, index) => {
                  return (
                    <li>
                      <div className="song-container">
                        <div className="song-list-playlist">
                          <IndividualSong
                            song={song}
                            key={song._id}
                            playlist={mySongsData}
                            index={index}
                            favorite={false}
                            playlistData={playlist}
                          />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        ) : (
          <p>No songs found</p>
        )}
      </div>
    </>
  );
}

export default PlaylistStack;
