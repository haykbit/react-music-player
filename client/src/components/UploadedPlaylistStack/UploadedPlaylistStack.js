import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { dispatchMySongsData } from "../../redux/song/action";
import { getMySongsData } from "../../api/api";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import IndividualSong from "../IndividualSong/index";

import "./style/playlistStack.scss";

function UploadedPlaylistStack() {
  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { uploadSongSuccess, deleteSongSuccess } = useSelector(
    (state) => state.song
  );

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(mySongsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMySongsData(items);
  }

  const [mySongsData, setMySongsData] = useState([]);
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      songData();
    }
  }, [loading, uploadSongSuccess, deleteSongSuccess]);

  async function songData() {
    const mySongs = await getMySongsData(user.uid);
    setMySongsData(mySongs.data.data);
    dispatch(dispatchMySongsData());
  }

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
                                  <IndividualSong song={song} key={song._id} />
                                </div>
                              </section>
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
      </div>
    </>
  );
}

export default UploadedPlaylistStack;
