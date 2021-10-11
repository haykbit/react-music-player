import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { getLikedSongs } from "../../../api/api";
import IndividualSong from "../../IndividualSong";

import "./style/playliststack.scss";

function FavPlaylistStack() {
  const [favSongsData, setFavSongsData] = useState(null);
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { cancelLikedSuccess } = useSelector((state) => state.song);

  async function loadPlaylistOnMount() {
    const favoritedPlaylist = await getLikedSongs(user.uid);
    setFavSongsData(favoritedPlaylist.data.data);
  }

  //condition for controll type of playlist

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(favSongsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFavSongsData(items);
  }

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
