import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { getMySongsPlaylist, getSongsFromPlaylist } from "../../../api/api";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import IndividualSong from "../../IndividualSong";

import "./style/playliststack.scss";

function PlaylistStack({ playlist }) {
  // console.log(playlist, "playlist from playlist stack");
  const [mySongsData, setMySongsData] = useState(null);
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { uploadSongSuccess, deleteSongSuccess, songUpdated } = useSelector(
    (state) => state.song
  );

  async function loadPlaylistOnMount() {
    const songs = await getSongsFromPlaylist(playlist._id);
    setMySongsData(songs.data.data);
  }

  //condition for controll type of playlist

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(mySongsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMySongsData(items);
  }

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      loadPlaylistOnMount();
    }
  }, [loading]);

  // useEffect(() => {
  //   if (!loading && authObserverSuccess) {
  //     loadPlaylistOnMount();
  //   }
  // }, []);

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

export default PlaylistStack;
