import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../services/auth";
import "./style/rightClickMenu.scss";

function PlaylistContextMenu({
  show,
  closeMenu,
  playlist,
  ToggleDeleteModal,
  ToggleEditModal,
  ToggleAddToPlaylist,
}) {
  const { loading, authObserverSuccess } = useSelector((state) => state.auth);
  const [userId, setUserId] = useState("");

  function getUserId() {
    const userUid = getCurrentUser().uid;
    setUserId(userUid);
  }

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUserId();
    }
  }, [loading]);

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

  function handleShare() {
    console.log("I'M SHARING!");
  }

  return (
    <>
      {show ? (
        <div className="context-menu-container" onClick={() => closeMenu()}>
          <div className="context-menu" onClick={(e) => e.stopPropagation()}>
            {playlist.owner === userId ? (
              <>
                <li className="menu-option-box" onClick={() => handleAddSong()}>
                  Add Song
                </li>
                <li
                  className="menu-option-box"
                  onClick={() => {
                    editHandle();
                    closeMenu();
                  }}
                >
                  Edit Playlist
                </li>

                <li
                  className="menu-option-box"
                  onClick={() => {
                    deleteHandle();
                    closeMenu();
                  }}
                >
                  Delete Playlist
                </li>
              </>
            ) : (
              ""
            )}
            <li className="menu-option-box" onClick={() => handleShare()}>
              Share
            </li>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PlaylistContextMenu;
