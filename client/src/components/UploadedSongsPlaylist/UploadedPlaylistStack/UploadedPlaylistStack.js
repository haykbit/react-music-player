import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { getMySongsPlaylist } from "../../../api/api";
import { orderMySongs } from "../../../redux/song/action";
import IndividualSong from "../../IndividualSong/index";

import "./style/playliststack.scss";

function UploadedPlaylistStack() {
  const dispatch = useDispatch();
  const [mySongsData, setMySongsData] = useState(null);
  const [orderInterval, setOrderInterval] = useState(null);
  const [orderChange, setOrderChange] = useState(false);
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { uploadSongSuccess, deleteSongSuccess, songUpdated } = useSelector(
    (state) => state.song
  );

  async function loadPlaylistOnMount() {
    const uploadedPlaylist = await getMySongsPlaylist(user.uid);
    setMySongsData(uploadedPlaylist.data.data);
  }

  function setOrderedList() {
    const orderedList = mySongsData.map((song) => song._id);
    dispatch(orderMySongs(user.uid, orderedList));
  }

  //condition for controll type of playlist

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(mySongsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setOrderChange(!orderChange);
    setMySongsData(items);
  }

  useEffect(() => {
    if (mySongsData) {
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
  }, [loading, uploadSongSuccess, deleteSongSuccess, songUpdated]);

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
                  {mySongsData ? (
                    <>
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

export default UploadedPlaylistStack;
