import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { getMyUploadedSongsPlaylist } from "../../redux/playlist/action";
import { getMySongsPlaylist } from "../../api/api";
import { getMySongsData } from "../../api/api";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import IndividualSong from "../IndividualSong/index";

import "./style/playlistStack.scss";

function PlaylistStack() {
  const [mySongsData, setMySongsData] = useState(null);
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { uploadSongSuccess, deleteSongSuccess } = useSelector(
    (state) => state.song
  );

  async function loadPlaylistOnMount() {
    const uploadedPlaylist = await getMySongsPlaylist(user.uid);
    console.log(uploadedPlaylist, "UPLOADED PLAYLIST");
    setMySongsData(uploadedPlaylist.data.data);
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
  }, [loading, uploadSongSuccess, deleteSongSuccess]);

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
                                  <section className="new-spain">
                                    <div className="song-list-playlist">
                                      <IndividualSong
                                        song={song}
                                        key={song._id}
                                        playlist={mySongsData}
                                        index={index}
                                      />
                                    </div>
                                  </section>
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
