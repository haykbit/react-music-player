import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dispatchMySongsData } from "../../redux/song/action";
import { getMySongsData } from "../../api/api";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import IndividualSong from "../IndividualSong/index";

import imageSong from "../../assets/images/albums/arctic-album-3.jpeg";
import imageSong1 from "../../assets/images/albums/arctic-album-2.jpeg";
import imageSong2 from "../../assets/images/albums/arctic-album-1.jpeg";
import "./style/dragdrop.scss";

function DragDropList() {
  const [mySongsData, setMySongsData] = useState([]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(mySongsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMySongsData(items);
  }

  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { uploadSongSuccess, deleteSongSuccess } = useSelector(
    (state) => state.song
  );

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      songData();
    }
    console.log(mySongsData);
  }, [loading, uploadSongSuccess, deleteSongSuccess]);

  async function songData() {
    const mySongs = await getMySongsData(user.uid);
    setMySongsData(mySongs.data.data);
    dispatch(dispatchMySongsData());
  }

  return (
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
  );
}

export default DragDropList;
