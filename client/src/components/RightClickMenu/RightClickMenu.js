import React from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../services/auth";
import "./style/rightClickMenu.scss";
import { deleteSongFromPlaylist } from "../../redux/playlist/action";

function RightClickMenu({
  show,
  closeMenu,
  handleLike,
  song,
  ToggleDeleteModal,
  ToggleEditModal,
  ToggleAddToPlaylist,
  playlistData,
}) {
  const dispatch = useDispatch();
  const userUid = getCurrentUser().uid;

  async function editHandle() {
    ToggleEditModal();
  }

  async function deleteHandle() {
    ToggleDeleteModal();
  }

  function handleAddSong() {
    ToggleAddToPlaylist();
    closeMenu();
  }

  function handleSongRemoveFromPlaylist() {
    dispatch(deleteSongFromPlaylist(playlistData._id, song._id));
  }

  return (
    <>
      {show ? (
        <div className="context-menu-container" onClick={() => closeMenu()}>
          <div className="context-menu" onClick={(e) => e.stopPropagation()}>
            <div className="menu-option-box" onClick={() => handleLike()}>
              Favorite
            </div>
            <div className="menu-option-box" onClick={() => handleAddSong()}>
              Add Song
            </div>
            {playlistData && playlistData.owner === userUid ? (
              <div
                className="menu-option-box"
                onClick={() => handleSongRemoveFromPlaylist()}
              >
                Remove From Playlist
              </div>
            ) : (
              ""
            )}
            {song.owner === userUid ? (
              <>
                <div
                  className="menu-option-box"
                  onClick={() => {
                    editHandle();
                    closeMenu();
                  }}
                >
                  Edit
                </div>

                <div
                  className="menu-option-box"
                  onClick={() => {
                    deleteHandle();
                    closeMenu();
                  }}
                >
                  Delete
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default RightClickMenu;
